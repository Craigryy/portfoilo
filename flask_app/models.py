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

class User(Base):
    """
    User model for authentication.
    """
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)
    public_id = db.Column(db.String(100), unique=True)
    name = db.Column(db.String(100))
    password = db.Column(db.String(100))
    admin = db.Column(db.Boolean)
    category = db.relationship("Categories", backref="owner", lazy="dynamic")

    def to_json(self):
        """
        Convert User object to a JSON representation.
        """
        return {
            "id": self.id,
            "name": self.name,
            "public_id": self.public_id,
            "password": self.password,
            "admin": self.admin,
        }

    
class Categories(Base):
    """This is the model for categories"""
    __tablename__ = "Categories"
    id = db.Column(db.Integer, primary_key=True)
    name =  db.Column(db.String(100), nullable=False , unique=True )
    post = db.relationship(
        "BlogPost", backref="category", cascade="all, delete-orphan", lazy="dynamic"
    )

    def to_json(self):
        """
        Convert Categories object to a JSON representation.
        """
        return {"id": self.id, "name": self.name}
    

class BlogPost(Base):
    """Model for blog posts."""
    __tablename__ = "BlogPost"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False, unique=True)
    content = db.Column(db.String(300))
    category_id = db.Column(db.Integer, db.ForeignKey('Categories.id'))

    def to_json(self):
        """
        Convert BlogPost object to a JSON representation.
        """
        return {
            "id": self.id,
            "name": self.name,
            "content": self.content,
            "category_id": self.category_id
        }
