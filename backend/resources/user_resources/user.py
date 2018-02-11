# third party imports
from flask import request
from flask_restful import Resource, reqparse
from flask_jwt import JWT, jwt_required
from datetime import datetime

# import from main
from app import app, db
from routes.routes import user_routes

from models.user_models.user import UserModel


# class GetUser(Resource):
#
#     def get(self):
#         return "getting user"

@app.route('/api/user/<string:username>', methods=["GET"])
def get_user(username):
    return "getting user"


