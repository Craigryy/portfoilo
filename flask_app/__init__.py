from flask import Flask, request, make_response
from flask_mail import Mail, Message
from config import db
from flask_app.categories import category_bp
from flask_app.blogs import blog_bp
from flask_app.mail import mail_bp
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
    mail = Mail(app)
    CORS(app) 

   

    # create an in-memory database
    app.config["SQLALCHEMY_DATABASE_URI"] = f"postgresql://{POSTGRES_USER}:{POSTGRES_PASSWORD}@{POSTGRES_HOST}/{POSTGRES_DB}"
    app.config['SQLALCHEMY_TRACK_NOTIFICATION'] = False
    app.config['SECRET_KEY'] = 'portfolio'
    app.config['MAIL_SERVER'] = 'smtp.gmail.com'  # Update wi
    app.config['MAIL_PORT'] = 587
    app.config['MAIL_USE_TLS'] = True
    app.config['MAIL_USE_SSL'] = False
    app.config['MAIL_USERNAME'] = 'harriajames97@gmail.com' 
    app.config['MAIL_PASSWORD'] = ''  


    # Initialize the database
    db.init_app(app)
    with app.app_context():
        db.create_all()

    # Register blueprints
    app.register_blueprint(category_bp)
    app.register_blueprint(blog_bp)
    app.register_blueprint(mail_bp)
    
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
