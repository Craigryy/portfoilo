from config import db 
import datetime
from .models import BlogPost
from flask import Flask,Blueprint,make_response,jsonify
from flask import send_from_directory
from flask import request

blog_bp = Blueprint('blog_bp', __name__)

@blog_bp.route('/blogPost/',methods=['GET'])
def list_all_blogPost():

    blogs = BlogPost.query.all()
    return make_response(jsonify([blog.to_json() for blog in blogs]), 200)


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
                'data'      : [blog.to_json]
                })
    except Exception as e:
        print (e,"error")




