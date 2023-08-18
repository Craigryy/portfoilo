from flask_sqlalchemy import SQLAlchemy
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)

# create a in memory database 
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'
app.config['SQLALCHEMY_TRACK_NOTIFICATION']= False
app.config['SECRET_KEY'] = 'portfolio'

CORS(app)

db = SQLAlchemy()
db.init_app(app)