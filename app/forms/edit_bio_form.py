from typing import Text
from flask_wtf import FlaskForm
from wtforms import TextAreaField, SubmitField
from sqlalchemy import DateTime
from wtforms.validators import DataRequired


class EditBioForm(FlaskForm):
    bio = TextAreaField('Bio', validators=[DataRequired("Bio cannot be longer than 200 characters.")])
    created_at = DateTime("Created at")
    updated_at = DateTime("Updated at")
    submit = SubmitField("Submit")
