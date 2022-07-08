from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, SubmitField
from sqlalchemy import DateTime
from wtforms.validators import DataRequired


class EditStoryForm(FlaskForm):
    user_id = IntegerField('User ID')
    title = StringField('Title', validators=[DataRequired()])
    story = StringField('Story', validators=[DataRequired()])
    img = StringField('Image', validators=[DataRequired()])
    created_at = DateTime('Created at')
    updated_at = DateTime('Updated at')
    submit = SubmitField('Submit')
