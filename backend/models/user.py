from db import db
# from note import NoteModel

class UserModel(db.Model):
    """This class creates the models for a user object"""

    __tablename__ = 'users'

    id = db.Column('id', db.Integer, primary_key=True, autoincrement=True)
    first_name = db.Column('first_name', db.String(80))
    last_name = db.Column('last_name', db.String(80))
    username = db.Column('username', db.String(80), unique=True, nullable=False)
    password = db.Column('password', db.String(80), nullable=False)
    email = db.Column('email', db.String(80), nullable=False)
    short_description = db.Column('short_description', db.Text)
    join_date = db.Column('join_date', db.TIMESTAMP)
    active = db.Column('active', db.Boolean, default=False, nullable=False)
    status = db.Column('status', db.String(80))

    notes = db.relationship('NoteModel', secondary='users_notes_relationship', backref='user', lazy='dynamic')

    user_notes_relationship = db.Table('users_notes_relationship',
         db.Column('id', db.Integer, primary_key=True),
         db.Column('user_id', db.Integer, db.ForeignKey('users.id')),
         db.Column('note_id', db.Integer, db.ForeignKey('notes.id')))

    def __init__(self, new_user):
        """This method is used to initialize the user objects"""

        self.first_name = new_user['first_name']
        self.last_name = new_user['last_name']
        self.username = new_user['username']
        self.password = new_user['password']
        self.email = new_user['email']
        self.short_description = new_user['short_description']
        self.join_date = new_user['join_date']
        self.active = new_user['active']
        self.status = new_user['status']

    def __repr__(self):
        """This method returns a string representation of the user object"""

        return "User(id='%s')" % self.id

    def json(self):
        """This method returns a json representation of the user object"""

        # parse date object as datetime string
        if self.join_date:
            str_join_date = self.join_date.strftime('%B %d, %Y at %I:%M%p')
        else:
            str_join_date = None

        return {'id': self.id, 'first_name': self.first_name, 'last_name': self.last_name, 'username': self.username,
                'emai': self.email, 'short_description': self.short_description, 'join_date': str_join_date,
                'active': self.active, 'status': self.status, }

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
        return cls.query.filter_by(username=username).first()

    @classmethod
    def find_by_id(cls, id):
        """This method is used to find a user by the given id"""
        return cls.query.filter_by(id=id).first()
       
















