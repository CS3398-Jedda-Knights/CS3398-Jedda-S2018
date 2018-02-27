# third party imports
from flask import request
from flask_restful import Resource, reqparse
from flask_jwt import JWT, jwt_required
from datetime import datetime

# import from main
from app import app
from config.db import db
from app import api
from routes.routes import flashcard_routes

from models.flashcard_models.flashcard import FlashcardModel

parser = reqparse.RequestParser()

parser.add_argument('username', type=str)
parser.add_argument('subject', type=str)
parser.add_argument('question', type=str)
parser.add_argument('answer', type=str)

class GetFlashcards(Resource):
    def get(self, subject):
        flashcards = FlashcardModel.find_by_subject(subject)

        if flashcards:
            return {'Flashcards': flashcards.json()}, 200
        return {'error': 'Flashcards not found'}, 400

class FlashcardResource(Resource):
    def get(self, id):
        flashcard = FlashcardModel.find_by_id(id)

        if flashcard:
            return {'Flashcard': flashcard.json()},200
        return {'error': 'Flashcard not found'}, 400

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
        print(args)
        new_flashcard = FlashcardModel(args)


        new_flashcard.save_to_db()

        return {'message': 'Flashcard created'}, 200


# append api endpoint for the 
api.add_resource(GetFlashcards, flashcard_routes['read all flashcards']['url'])
api.add_resource(CreateFlashcard, flashcard_routes['create new flashcard']['url'])
api.add_resource(FlashcardResource, flashcard_routes['read one flashcard']['url'])