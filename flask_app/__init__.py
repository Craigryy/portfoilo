from flask import Flask, request, make_response
from config import db
from flask_app.categories import category_bp
from flask_app.blogs import blog_bp
from flask_cors import CORS
from config import (
    POSTGRES_HOST,
    POSTGRES_DB,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    db,
    POSTGRES_SECRET_KEY,
)

def create_app():

    app = Flask(__name__) 
    CORS(app) 

    # # Initialize the Flask-Uploads extension
    # from Flask_app.extensions import photos  # Import your UploadSet instance
    # configure_uploads(app, photos)

    # create an in-memory database
    app.config["SQLALCHEMY_DATABASE_URI"] = f"postgresql://{POSTGRES_USER}:{POSTGRES_PASSWORD}@{POSTGRES_HOST}/{POSTGRES_DB}"
    app.config['SQLALCHEMY_TRACK_NOTIFICATION'] = False
    app.config['SECRET_KEY'] = 'portfolio'

    # Initialize the database
    db.init_app(app)
    with app.app_context():
        db.create_all()

    # Register blueprints
    app.register_blueprint(category_bp)
    app.register_blueprint(blog_bp)
    
    @app.before_request
    def before_request():
        if request.method == "OPTIONS" or request.method == "options":
            # Handle preflight request (OPTIONS)
            headers = {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
            }
            response = make_response()
            for key, value in headers.items():
                response.headers[key] = value
            return response

    return app
