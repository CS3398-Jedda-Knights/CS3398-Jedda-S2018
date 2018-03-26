from flask_restful import Resource, reqparse
from models.note import NoteModel

class GetNote(Resource):
    def get(self, id):
        note = NoteModel.find_by_id(id)

        if note:
            return {'note': note.json()}, 200
        return {'error': 'Note not found'}, 404