from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User
from sqlalchemy import func


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(func.lower(User.email) == func.lower(email)).first()
    if not user:
        raise ValidationError('Incorrect credentials. Please try again.')


def password_matches(form, field):
    # Checking if password matches
    password = field.data
    email = form.data['email']
    user = User.query.filter(User.email == email).first()
    if not user:
        raise ValidationError('Incorrect credentials. Please try again.')
    if not user.check_password(password):
        raise ValidationError('Incorrect credentials. Please try again.')


class LoginForm(FlaskForm):
    email = StringField('email', validators=[DataRequired("Please provide an email."), user_exists])
    password = StringField('password', validators=[DataRequired("Please provide a password."), password_matches])
