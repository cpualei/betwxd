# add environment and add_prefix-for_prod to existing import statement
from .db import db, environment, SCHEMA, add_prefix_for_prod

class Clap(db.Model):
    __tablename__ = "claps"

    # add to every model file under __table_name__
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))
    story_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('stories.id'), ondelete="CASCADE"))
    created_at = db.Column(db.DateTime)
    updated_at = db.Column(db.DateTime)

    users = db.relationship("User", back_populates="claps")
    stories = db.relationship("Story", back_populates="claps")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "story_id": self.story_id,
            "created_at": self.created_at,
            "updated_at": self.updated_at
    }
