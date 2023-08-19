from config import db 
import datetime
from .models import BlogPost
from flask import Flask,blueprints,make_response,jsonify
from flask import send_from_directory
from flask import request

blog_bp = Blueprint('blog_bp', __name__)

@blog_bp.route('/blogPost',methods=['GET'])
def list_all_blogPost():

    blogPost_files = BlogPost.query.all()
    return make_response(jsonify([blog.to_json() for blog in BlogPost_files]), 200)


@blog_bp.route('/blogPost/<int:id>',methods=['GET'])
def get_one_blog(id):
    try :
        blog = BlogPost.query.filter_by(id=id).first()
        if not blog or id is None:
            raise Exception("blog doesnot exist")
            return jsonify({'status':True,'data':[blog.to_json()]})
        else:
            return jsonify({
                'status'    : True ,
                "message"   :"success",
                'data'      : [blog]
                })
    except Exception as e:
        print (e,"error")



@blog_bp.route('/upload', methods=['POST'])
def upload_photo():
    if 'photo' in request.files:
        photo = request.files['photo']
        if photo.filename != '':
            filename = photos.save(photo)
            # Save the filename to the database or perform other actions
            return 'Photo uploaded successfully'
    return 'No photo selected'


@app.route('/uploads/<filename>')
def uploaded_photo(filename):
    return send_from_directory(app.config['UPLOADED_PHOTOS_DEST'], filename)



