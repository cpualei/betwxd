from .db import db

class Story(db.Model):
    __tablename__ = "stories"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    title = db.Column(db.String(50), nullable=False)
    story = db.Column(db.Text(5000), nullable=False)
    img = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime)
    updated_at = db.Column(db.DateTime)
    
    comments = db.relationship("Comment", backpopulates="stories", cascade="all, delete")

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
