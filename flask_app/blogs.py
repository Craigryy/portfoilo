from config import db 
import datetime
from .models import BlogPost ,Categories 
from flask import Flask,Blueprint,make_response,jsonify,request
from flask import send_from_directory
from flask import request

blog_bp = Blueprint('blog_bp', __name__)

@blog_bp.route('/blogPost/',methods=['GET'])
def list_all_blogPost():
    """
    List all blog post.
    """

    blogs = BlogPost.query.all()
    return make_response(jsonify([blog.to_json() for blog in blogs]), 200)

 
@blog_bp.route('/categories/<int:category_id>/blogs', methods=['GET'])
def get_blogs_by_category(category_id):
    """
    Get a blog by id.
    """
    try:
        category = Categories.query.get(category_id)
        if not category:
            return jsonify({"message": "Category not found"}), 404
        
        blogs = BlogPost.query.filter(BlogPost.category_id == category_id).all()
        blogs_data = [{"id": blog.id, "name": blog.name, "content": blog.content} for blog in blogs]
        
        return jsonify(blogs_data), 200
    except Exception as e:
        return jsonify({"message": str(e)}), 500



@blog_bp.route('/categories/<int:id>/blogPost/',methods=['POST'])
def create_blog(id):
    """
    Create a new blog post.
    """
    category = Categories.query.filter_by(id=id).first()
    if not category or id is None :
        return make_reponse(jsonify({"message":"blog post doesn't exist".format(id)}))
    
    json_data = request.get_json()
    name , content = json_data['name'],json_data['content']
    newBlogpost = BlogPost(name=name,content=content )
    newBlogpost.category_id = category.id
    newBlogpost.save()



@blog_bp.route('/categories/<int:id>/blogPost/<int:blog_id>/', methods=['PUT'])
def update_blog(id, blog_id):
    """
    Update a blog in the specified category.
    """
    category = Categories.query.filter_by(id=id).first()
    if not category:
        return make_response(jsonify({'message': 'Category with id:{} was not found'.format(id)}))

    blog = BlogPost.query.get(blog_id)
    if not blog:
        return make_response(jsonify({'message': 'Blog with id:{} was not found'.format(blog_id)}))

    blog.name = request.json.get('name', blog.name)
    blog.content = request.json.get('content', blog.content)
    blog.category_id = request.json.get('category_id', blog.category_id)
    blog.category_id = category.id
    blog.save()


@blog_bp.route('/categories/<int:id>/blogs/<int:blog_id>', methods=['DELETE'])
def delete_blog(id, blog_id):
    """
    Delete a blog from the specified category.
    """
    blog_category = Categories.query.filter_by(id=id).first()
    if not blog_category:
        return make_response(jsonify({'message': 'blog category with id:{} was not found'.format(blog_id)}))

    blog = BlogPost.query.get(blog_id)
    if not blog:
        return make_response(jsonify({'message': 'blog with id:{} was not found'.format(blog_id)}))

    blog.delete()
    return make_response(jsonify({"message": "blog deleted successfully"}), 200)
