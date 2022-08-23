from .db import db
from .clap import Clap
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    profile_photo = db.Column(db.String(255))
    bio = db.Column(db.String(200))

    comments = db.relationship("Comment", back_populates="users")
    # likes = db.relationship("Like", back_populates="users")

    claps = db.relationship(
    'Clap',
    foreign_keys='Clap.user_id',
    backref='user', lazy='dynamic')

    def clap_story(self, story):
        if not self.clapped_story(story):
            clap = Clap(user_id=self.id, story_id=story.id)
            db.session.add(clap)

    def unclap_story(self, story):
        if self.clapped_story(story):
            Clap.query.filter_by(
                user_id=self.id,
                story_id=story.id).delete()

    def clapped_story(self, story):
        return Clap.query.filter(
            Clap.user_id == self.id,
            Clap.story_id == story.id).count() > 0

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'profile_photo': self.profile_photo,
            'bio': self.bio
        }
