from flask import Blueprint, request
from app.models import db, Story
from app.forms import CreateStoryForm, EditStoryForm
from app.AWS import upload_file_to_s3, allowed_file, get_unique_filename
from datetime import datetime


story_routes = Blueprint('stories', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{error}')
    return errorMessages

@story_routes.route('/')
def stories():
    stories = Story.query.all()
    return {'stories': [story.to_dict() for story in stories]}

@story_routes.route('/<int:id>')
def story(id):
    story = Story.query.get(id)
    print("THIS IS THE STORY ROUTE", story)
    return story.to_dict()

@story_routes.route('/new-story', methods=['POST'])
def add_story():
    form = CreateStoryForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if "img" not in request.files:
        return {"errors": "image required"}, 400

    image = request.files["img"]

    if not allowed_file(image.filename):
        return {"errors": "file type not permitted"}, 400

    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)

    if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload, 400

    url = upload["url"]

    if form.validate_on_submit():
        data = form.data
        new_story = Story(user_id=data['user_id'],
                          title=data['title'],
                          story=data['story'],
                          img=url,
                          created_at=datetime.now())
        db.session.add(new_story)
        db.session.commit()
        return new_story.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@story_routes.route('/edit-story/<int:id>', methods=['PUT'])
def edit_story(id):
    story = Story.query.get(id)
    form = EditStoryForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        story.title=data['title']
        story.story=data['story']
        story.img=data['img']
        story.updated_at=datetime.now()

        db.session.commit()
        return story.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}

@story_routes.route('/<int:id>', methods=['DELETE'])
def delete_story(id):
    story = Story.query.get(id)
    db.session.delete(story)
    db.session.commit()

    return "Story was successfully deleted."
