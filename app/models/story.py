# add environment and add_prefix-for_prod to existing import statement
from .db import db, environment, SCHEMA, add_prefix_for_prod

class Story(db.Model):
    __tablename__ = "stories"

    # add to every model file under __table_name__
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))
    # category_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("categories.id")))
    title = db.Column(db.String(100), nullable=False)
    story = db.Column(db.String(5000), nullable=False)
    img = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime)
    updated_at = db.Column(db.DateTime)

    comments = db.relationship("Comment", back_populates="stories", cascade="all, delete")
    claps = db.relationship("Clap", back_populates="stories", cascade="all, delete")
    # categories = db.relationship("Category", backpopulates="stories")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "title": self.title,
            "story": self.story,
            "img": self.img,
            "created_at": self.created_at,
            "updated_at": self.updated_at
    }
