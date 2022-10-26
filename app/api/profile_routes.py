from datetime import datetime
from flask import Blueprint, request
from app.models import db, User
from app.forms import EditUsernameForm, EditBioForm
from app.AWS import upload_file_to_s3, allowed_file, get_unique_filename
from datetime import datetime


profile_routes = Blueprint('profile', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{error}')
    return errorMessages

# ====== Add profile_photo_routes =======

@profile_routes.route('/<int:id>/username', methods=['PUT'])
def edit_username(id):
    user = User.query.get(id)
    form = EditUsernameForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        user.username=data['username']
        user.updated_at=datetime.now()

        db.session.commit()
        return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}

@profile_routes.route('/<int:id>/bio', methods=['PUT'])
def edit_bio(id):
    user = User.query.get(id)
    form = EditBioForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        user.bio=data['bio']
        user.updated_at=datetime.now()

        db.session.commit()
        return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}


# @profile_routes.route('/<int:id>', methods=['PUT'])
# def edit_profile_photo(id):
#     profile_photo = User.query.get(id)
