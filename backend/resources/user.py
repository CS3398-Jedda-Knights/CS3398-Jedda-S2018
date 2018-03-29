from datetime import datetime

from flask_restful import Resource, reqparse
from flask_jwt import jwt_required
from models.user import UserModel


class UserSignUp(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('first_name',
        type=str,
        required=True,
        help="This field cannot be blank."
    )    
    parser.add_argument('last_name',
        type=str,
        required=True,
        help="This field cannot be blank."
    )
    parser.add_argument('username',
        type=str,
        required=True,
        help="This field cannot be blank."
    )
    parser.add_argument('password',
        type=str,
        required=True,
        help="This field cannot be blank."
    )
    parser.add_argument('email',
        type=str,
        required=True,
        help="This field cannot be blank."
    )
    parser.add_argument('short_description',
        type=str,
        required=False,
        default="No bio."
    )
    parser.add_argument('join_date',
        required=False,
        default=datetime.now()
    )
    parser.add_argument('active',
        type=bool,
        required=False,
        default=True
    )
    parser.add_argument('status',
        type=str,
        required=False,
        default="Studying"
    )
    parser.add_argument('profile_picture',
        type=str,
        required=False,
        default="http://placeholder.pics/svg/400x400/DEDEDE/000000-E2E2E2/Upload"
    )
    
    def post(self):
        data = UserSignUp.parser.parse_args()

        if UserModel.find_by_username(data['username']):
            return {"message": "A user with that username already exists"}, 400

        try:
            user = UserModel(data)
            user.save_to_db()
        except: 
            return {"message": "An error occured while attempting to add the user to the database"}
        return {"message": "User created successfully."}, 201

class GetUser(Resource):
    # @jwt_required()
    def get(self, username):
        user = UserModel.find_by_username(username)

        if user:
            return {'user': user.json()}, 200
        return {'error': 'User not found'}, 404



