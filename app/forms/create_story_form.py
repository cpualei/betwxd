from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, TextAreaField, SubmitField
from sqlalchemy import DateTime
from wtforms.validators import DataRequired


class CreateStoryForm(FlaskForm):
    user_id = IntegerField('User ID')
    title = TextAreaField('Title', validators=[DataRequired()])
    story = TextAreaField('Story', validators=[DataRequired()])
    img = StringField('Image', validators=[DataRequired()])
    created_at = DateTime('Created at')
    updated_at = DateTime('Updated at')
    submit = SubmitField('Submit')
