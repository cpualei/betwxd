from flask_wtf import FlaskForm
from wtforms import IntegerField, TextAreaField, SubmitField
from sqlalchemy import DateTime
from wtforms.validators import DataRequired


class EditCommentForm(FlaskForm):

    user_id = IntegerField('User ID')
    story_id = IntegerField('Story ID')
    content = TextAreaField('Comment Box', validators=[DataRequired()])
    created_at = DateTime('Created at')
    updated_at = DateTime('Updated at')
    submit = SubmitField('Submit')
