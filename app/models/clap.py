from .db import db

class Clap(db.Model):
    __tablename__ = "claps"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    story_id = db.Column(db.Integer, db.ForeignKey('stories.id', ondelete="CASCADE"))
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
