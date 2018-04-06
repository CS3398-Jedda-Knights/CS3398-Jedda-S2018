# third party imports
from flask import request
from flask_restful import Resource, reqparse
from flask_jwt import JWT, jwt_required
from datetime import datetime

from models.flashcard import FlashcardModel
from models.user import UserModel

parser = reqparse.RequestParser()

parser.add_argument('username', type=str)
parser.add_argument('subject', type=str)
parser.add_argument('question', type=str)
parser.add_argument('answer', type=str)

class GetFlashcardsBySubject(Resource):
    def get(self, subject):
        flashcards = FlashcardModel.find_by_subject(subject)

        if flashcards:
            return {'Flashcards': FlashcardModel.jsonlist(flashcards)}, 200
        return {'error': 'Flashcards not found'}, 400

class GetFlashcard(Resource):
    def get(self, id):
        flashcard = FlashcardModel.find_by_id(id)

        if flashcard:
            return {'Flashcard': flashcard.json()},200
        return {'error': 'Flashcard not found'}, 400

class UpdateFlashcard(Resource):
    def put(self, id):
        flashcard = FlashcardModel.find_by_id(id)

        if flashcard:
            args = parser.parse_args()

            flashcard.username = args['username']
            flashcard.subject = args['subject']
            flashcard.question = args['question']
            flashcard.answer = args['answer']

            flashcard.save_to_db()

            return {'message': 'Flashcard updated'}, 200
        return {'error': 'Flashcard not found'}, 400


class CreateFlashcard(Resource):
    def post(self):
        args = parser.parse_args()

        if args: 
            new_flashcard = FlashcardModel(args)
            # user = UserModel.find_by_username(args['username'])

            # if user:
                # user.flashcards.append(new_flashcard)
            new_flashcard.save_to_db()

            return {'message': 'Flashcard added'}, 200
        return{'error': 'flashcard unable to be added'}

