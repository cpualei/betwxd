from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, TextAreaField, SubmitField
from sqlalchemy import DateTime
from wtforms.validators import DataRequired, Length


class CreateStoryForm(FlaskForm):
    user_id = IntegerField('User ID')
    title = TextAreaField('Title', validators=[DataRequired("*Please provide a title for your story."), Length(max=100, message="*Title must not exceed 100 characters.")])
    story = TextAreaField('Story', validators=[DataRequired("*Please provide a story for your post."), Length(max=100, message="*Story must not exceed 5000 characters.")])
    img = StringField('Image', validators=[DataRequired("*Please provide an image for your story.")])
    # img = StringField('Image')
    created_at = DateTime('Created at')
    updated_at = DateTime('Updated at')
    submit = SubmitField('Submit')
