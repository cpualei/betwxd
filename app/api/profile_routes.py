from flask import Blueprint
from app.models import db, User
from app.AWS import upload_file_to_s3, allowed_file, get_unique_filename


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

# @profile_photo_routes.route('/<int:id>', methods=['PUT'])
# def edit_profile_photo(id):
#     profile_photo = User.query.get(id)
