from flask import Blueprint, request
from app.models import db, Story
from app.forms import CreateStoryForm
from datetime import datetime


story_routes = Blueprint('stories', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@story_routes.route('/')
def stories():
    stories = Story.query.all()
    return {'stories': [story.to_dict() for story in stories]}

@story_routes.route('/new-story', methods=['POST'])
def add_story():
    form = CreateStoryForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        new_story = Story(title=data['title'],
                          story=data['story'],
                          img=data['img'],
                          created_at=datetime.now(),
                          updated_at=datetime.now())
        db.session.add(new_story)
        db.session.commit()
        return new_story.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
