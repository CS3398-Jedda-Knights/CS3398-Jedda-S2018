from flask_sqlalchemy import SQLAlchemy
import sys
sys.path.append('..')
from app import app

db = SQLAlchemy(app)