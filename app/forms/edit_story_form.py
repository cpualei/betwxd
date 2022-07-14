from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, SubmitField
from sqlalchemy import DateTime
from wtforms.validators import DataRequired


class EditStoryForm(FlaskForm):
    user_id = IntegerField('User ID')
    title = StringField('Title', validators=[DataRequired("*Please provide a title for your story.")])
    story = StringField('Story', validators=[DataRequired("*Please provide a story to publish.")])
    img = StringField('Image', validators=[DataRequired("*Please provide an image in PNG, JPG or JPEG format.")])
    # created_at = DateTime('Created at')
    updated_at = DateTime('Updated at')
    submit = SubmitField('Submit')
