from config import db


class Base(db.Model):
    
    __abstract__ = True

    id = db.Column('id', db.Integer, primary_key=True)

    def save(self):

        db.session.add(self)
        db.session.commit()

    def delete(self):

        db.session.add(self)
        db.session.delete(self)
        db.session.commit()

    
class Categories(Base):
    """This is the model for categories"""
    id = db.Column(db.Integer, primary_key=True)
    name =  db.Column(db.String(100), nullable=False , unique=True )
    post = db.relationship(
        "BlogPost", backref="category", cascade="all, delete-orphan", lazy="dynamic"
    )

    def to_json(self):
        """
        Convert BookCategory object to a JSON representation.
        """
        return {"id": self.id, "name": self.name}
    

class BlogPost(Base):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False, unique=True)
    content = db.Column(db.String(300))
    category_id = db.Column(db.Integer, db.ForeignKey('categories.id'))
    photo = db.Column(db.String(255))  

    def to_json(self):
        """
        Convert BlogPost object to a JSON representation.
        """
        return {
            "id": self.id,
            "name": self.name,
            "content": self.content,
            "category_id": self.category_id,
            "photo": self.photo
        }