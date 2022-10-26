from sqlite3 import Date
from typing import Text
from flask_wtf import FlaskForm
from wtforms import SubmitField, TextAreaField
from sqlalchemy import DateTime
from wtforms.validators import DataRequired


class EditUsernameForm(FlaskForm):
    username = TextAreaField('Username', validators=[DataRequired("Username cannot be longer than 40 characters.")])
    created_at = DateTime("Created at")
    updated_at = DateTime("Updated at")
    submit = SubmitField("Submit")
