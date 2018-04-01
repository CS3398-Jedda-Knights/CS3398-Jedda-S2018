import os
import datetime

from flask import Flask
from flask_restful import Api
from flask_jwt import JWT
from flask_cors import CORS

from security import authenticate, identity

from resources.user import GetUser, GetUserById, UserSignUp
from resources.note import GetNote, GetNotes, CreateNote, UpdateNote


app = Flask(__name__)
CORS(app, supports_credentials=True)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = os.urandom(24)

api = Api(app)

@app.before_first_request
def create_tables():
    db.create_all()

jwt = JWT(app, authenticate, identity)  # /auth
app.config['JWT_EXPIRATION_DELTA'] = datetime.timedelta(days=1)


# user resources
api.add_resource(UserSignUp, '/user/signup')
api.add_resource(GetUser, '/user/<string:username>')
api.add_resource(GetUserById, '/user/<int:id>')


#note resources
api.add_resource(GetNote, '/note/<string:id>')
api.add_resource(GetNotes, '/notes/<string:username>')
api.add_resource(CreateNote, '/note/add')
api.add_resource(UpdateNote, '/note/<string:id>')



# api.add_resource(GetFlashcards, flashcard_routes['read all flashcards']['url'])
# api.add_resource(CreateFlashcard, flashcard_routes['create new flashcard']['url'])
# api.add_resource(FlashcardResource, flashcard_routes['read one flashcard']['url'])

if __name__ == '__main__':
    from db import db
    db.init_app(app)
    app.run(port=9000, debug=True)
