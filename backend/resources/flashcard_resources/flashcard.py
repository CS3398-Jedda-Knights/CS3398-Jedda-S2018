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

class GetFlashcards(Resource):
    def get(self, subject):
        flashcards = FlashcardModel.find_by_subject(subject)

        if flashcards:
            return {'Flashcards': flashcards.json()}, 200
        return {'error': 'Flashcards not found'}, 404


# append api endpoint for the 
api.add_resource(GetFlashcards, flashcard_routes['read all flashcards']['url'])

