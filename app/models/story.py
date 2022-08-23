from .db import db

class Story(db.Model):
    __tablename__ = "stories"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    # category_id = db.Column(db.Integer, db.ForeignKey("categories.id"))
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
