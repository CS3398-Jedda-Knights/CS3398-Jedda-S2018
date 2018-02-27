from config.db import db
import datetime


class FlashcardModel(db.Model):
    """This class creates the models for a user object"""

    __tablename__ = 'flashcards'

    id = db.Column('id', db.Integer, primary_key=True)
    username = db.Column('username', db.String(80), nullable=False)
    subject = db.Column('subject', db.String(80))
    # description = db.Column('description', db.String(80))
    question = db.Column('question', db.String(80))
    answer = db.Column('answer', db.String(80))
    # create_date = db.Column('create_date', db.TIMESTAMP)
    # active = db.Column('active', db.Boolean, default=False, nullable=False)
    # status = db.Column('status', db.String(80))

    def __init__(self, new_flashcard):
        """This method is used to initialize the user objects"""

        self.username = new_flashcard['username']
        self.subject = new_flashcard['subject']
        # self.description = new_flashcard['description']
        self.question = new_flashcard['question']
        self.answer = new_flashcard['answer']
        # self.create_date = datetime.datetime.now()

    def __repr__(self):
        """This method returns a string representation of the user object"""

        return 'FlashcardModel %r' % self.id

    def json(self):
        """This method returns a json representation of the user object"""

        # parse date object as datetime string
        # if self.create_date:
        #     str_create_date = self.create_date.strftime('%B %d, %Y at %I:%M%p')
        # else:
        #     str_create_date = None

        return {'id': self.id, 'username': self.username, 'subject': self.subject,
                'question': self.question, 'answer': self.answer}

    def save_to_db(self):
        """This methods saves the changes made to a user object and commits those changes to the database"""

        db.session.add(self)
        db.session.commit()

    def delete_from_db(self):
        """This methods deletes a user object and commits those changes to the database"""

        db.session.delete(self)
        db.session.commit()

    @classmethod
    def find_by_id(cls, id):
        """This method is used to find a user by the given id"""
        return cls.query.filter_by(id=id).first()
    
    @classmethod
    def find_by_subject(cls, subject):
        """This method is used to find all the flashcards by the given subject"""
        return cls.query.filter_by(subject=subject).all()


db.create_all()
db.session.commit()




