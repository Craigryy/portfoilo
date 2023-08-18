from flask import Flask
from pymongo import MongoClient
from flask_uploads import configure_uploads
from config import db
from Flask_app.categories import category_bp
from Flask_app.blogs import blog_bp
from Flask_app.view import views_bp

def create_app():

    app = Flask(__name__) 
    CORS(app) 
    

    # Configure Flask-Uploads
    configure_uploads(app, photos)

    # create a in memory database 
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'
    app.config['SQLALCHEMY_TRACK_NOTIFICATION']= False
    app.config['SECRET_KEY'] = 'portfolio'

   
    
    # Initialize the database
    db.init_app(app)
    with app.app_context():
        db.create_all()

    # Register blueprints
    app.register_blueprint(category_bp)
    app.register_blueprint(blog_bp)
    app.register_blueprint(views_bp)
    
    
    

    return app
