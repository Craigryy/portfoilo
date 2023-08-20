import os
from flask_sqlalchemy import SQLAlchemy
from flask import Flask
from flask_cors import CORS


# Check if running inside Docker container
if os.environ.get('DOCKER_ENV'):
    POSTGRES_HOST = 'database'
else:
    POSTGRES_HOST = os.environ.get('POSTGRES_HOST', 'localhost')

POSTGRES_PORT = int(os.environ.get('POSTGRES_PORT', 5432))
POSTGRES_DB = os.environ.get('POSTGRES_DB', 'portfolio')
POSTGRES_USER = os.environ.get('POSTGRES_USER', 'postgres')
POSTGRES_PASSWORD = os.environ.get('POSTGRES_PASSWORD', 'Favour98')
POSTGRES_SECRET_KEY = os.environ.get('POSTGRES_SECRET_KEY', 'portfolio')
FLASK_PORT = int(os.environ.get('FLASK_PORT', 5000))

app = Flask(__name__)

# create a in memory database 
app.config["SQLALCHEMY_DATABASE_URI"] = f"postgresql://{POSTGRES_USER}:{POSTGRES_PASSWORD}@{POSTGRES_HOST}:{POSTGRES_PORT}/{POSTGRES_DB}"
app.config['SQLALCHEMY_TRACK_NOTIFICATION']= False
app.config['SECRET_KEY'] = 'portfolio'

CORS(app)

db = SQLAlchemy()
db.init_app(app)
