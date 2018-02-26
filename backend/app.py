import os
from flask import Flask
from flask_cors import CORS, cross_origin
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy

db_path = os.path.join(os.path.dirname(__file__), 'app.db')
db_uri = 'sqlite:///{}'.format(db_path)

app = Flask(__name__)
CORS(app, supports_credentials=True)

app.config['SQLALCHEMY_DATABASE_URI'] = db_uri
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['DEBUG'] = True
app.config['SECRET_KEY'] = os.urandom(24)

api = Api(app)

# import routes
from routes.routes import *

# import resource to append to the api
from resources.user_resources.user import *
from resources.flashcard_resources.flashcard import *

if __name__ == '__main__':
    db.init_app(app)
    db.create_all()
    app.run(host='localhost', port=5000)

