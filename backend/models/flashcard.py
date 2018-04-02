from db import db

class FlashcardModel(db.Model):
    """This class creates the models for a user object"""

    __tablename__ = 'flashcards'

    id = db.Column('id', db.Integer, primary_key=True)
    username = db.Column('username', db.String(80), nullable=False)
    subject = db.Column('subject', db.String(80))
    question = db.Column('question', db.String(80))
    answer = db.Column('answer', db.String(80))

    def __init__(self, new_flashcard):
        """This method is used to initialize the user objects"""

        self.username = new_flashcard['username']
        self.subject = new_flashcard['subject']
        self.question = new_flashcard['question']
        self.answer = new_flashcard['answer']

    def __repr__(self):
        """This method returns a string representation of the user object"""

        return 'FlashcardModel %r' % self.id

    def json(self):
        """This method returns a json representation of the user object"""

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

    @classmethod
    def jsonlist(cls, flashcards):
        flashcardlist = []
        for flashcard in flashcards:
            flashcardlist.append(flashcard.json())
        
        return flashcardlist

