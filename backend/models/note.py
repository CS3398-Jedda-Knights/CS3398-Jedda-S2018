from db import db
import datetime


class NoteModel(db.Model):
    """This class creates the models for a user object"""

    __tablename__ = 'notes'

    id = db.Column('id', db.Integer, primary_key=True)
    subject = db.Column('subject', db.String(80))
    title = db.Column('title', db.Text)
    body = db.Column('body', db.Text)
    create_date = db.Column('create_date', db.TIMESTAMP)
    is_shared = db.Column('is_shared', db.Boolean, default=False, nullable=False) #for archiving?
    shared_users = db.Column('shared_users', db.PickleType)

    def __init__(self, new_note):
        """This method is used to initialize the user objects"""

        self.username = new_note['username']#from token
        self.subject = new_note['subject']
        self.title = new_note['title']
        self.body = new_note['body']
        # self.create_date = new_user['create_date'] #current timestamp
        self.create_date = datetime.datetime.now()
        self.is_shared = False 

    def __repr__(self):
        """This method returns a string representation of the note object"""

        return "Note(id='%s')" % self.id

    def json(self):
        """This method returns a json representation of the user object"""

        # parse date object as datetime string
        if self.create_date:
            str_create_date = self.create_date.strftime('%B %d, %Y at %I:%M%p')
        else:
            str_create_date = None

        return {'id': self.id, 'subject': self.subject, 'title': self.title, 
                'body': self.body, 'create_date': str_create_date}

    def save_to_db(self):
        """This methods saves the changes made to a user object and commits those changes to the database"""

        db.session.add(self)
        db.session.commit()

    def delete_from_db(self):
        """This methods deletes a user object and commits those changes to the database"""

        db.session.delete(self)
        db.session.commit()

    @classmethod
    def find_by_username(cls, username):
        """This method is used to find a user by the given id"""
        return cls.query.filter_by(username=username).all()

    @classmethod
    def find_by_subject(cls, subject):
        """This method is used to find a user by the given id"""
        return cls.query.filter_by(subject=subject).all()
    
    @classmethod
    def find_by_id(cls, id):
        """This method is used to find a user by the given id"""
        return cls.query.filter_by(id=id).first()

    @classmethod
    def jsonlist(cls, notes):
        notelist = []
        for note in notes:
            notelist.append(note.json())
        
        return notelist
