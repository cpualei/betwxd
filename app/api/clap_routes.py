from flask import Blueprint, jsonify, json, request
from app.models import db, Clap, Story, User
# from app.forms import CreateCommentForm, EditCommentForm
from flask_login import login_required
from datetime import datetime


clap_routes = Blueprint('claps', __name__)

@clap_routes.route('/')
def claps():
    claps = Clap.query.all()
    print("THESE ARE THE CLAPS==============>", claps)
    return jsonify([clap.to_dict() for clap in claps])

@login_required
@clap_routes.route("/", methods=["POST"])
def clap():

    data = json.loads(request.data)
    new_clap = Clap(
        user_id = data["user_id"],
        story_id = data["story_id"]
        )
    db.session.add(new_clap)
    db.session.commit()

    clap = Clap.query.get(new_clap.id)
    return clap.to_dict()

@login_required
@clap_routes.route("/<int:id>", methods=["DELETE"])
def delete_clap(id):
    clap = Clap.query.get(id)
    db.session.delete(clap)
    db.session.commit()
    return clap.to_dict()
