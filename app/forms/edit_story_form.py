from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, SubmitField
from sqlalchemy import DateTime
from wtforms.validators import DataRequired, Length, Regexp


class EditStoryForm(FlaskForm):
    user_id = IntegerField('User ID')
    title = StringField('Title', validators=[DataRequired("*Please provide a title for your story."), Length(max=100, message="*Title must not exceed 100 characters.")])
    story = StringField('Story', validators=[DataRequired("*Please provide a story for your post."), Length(max=5000, message="*Story must not exceed 5000 characters.")])
    img = StringField('Image', validators=[DataRequired("*Please provide an image in PNG, JPG or JPEG format."), Regexp("([^\\s]+(\\.(?i)(jpe?g|png))$)", message="*Please provide an image in PNG, JPG or JPEG format.")])
    # created_at = DateTime('Created at')
    updated_at = DateTime('Updated at')
    submit = SubmitField('Submit')
