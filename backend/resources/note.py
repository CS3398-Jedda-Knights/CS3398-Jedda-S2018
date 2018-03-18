from flask_restful import Resource, reqparse
from models.note import NoteModel

parser = reqparse.RequestParser()
parser.add_argument(
    'title',
    type=str,
    required=True)
parser.add_argument(
    'username',
    type=str,
    requried=True)
parser.add_argument(
    'body',
    type=str,
    required=True)
parser.add_argument(
    'subject',
    type=str,
    required=True)
parset.add_argument(
    'active',
    type=bool)

class GetNote(Resource):
    def get(self, id):
        note = NoteModel.find_by_id(id)

        if note:
            return {'note': note.json()}, 200
        return {'error': 'Note not found'}, 404

# class GetNotes(Resource):
#   def get(self, username):
#       notes = NoteModel.find_by_username(username)

#       if notes:
#           return {'notes': note.jsonlist()}, 200
#       return {'error': 'No notes found'}, 400

# class PostNote(Resource):
#     def post(self):
#         args = parser.parse_args()
#         new_note = NoteModel(args)
#         new_note.save_to_db()

#         return {'message': 'Note added'}

# class PutNote(Resource):
#     def put(self, id):
#         note = NoteModel.find_by_id(id)

#         if note:
#             args = parser.parse_args()
#             note.title = args['title']
#             note.subject = args['subject']
#             note.body = args['body']
#             note.active = args['active']
#             note.save_to_db()

#             return {'message' : 'Note updated'}, 200
#         return {'error':'Note not found'}, 400