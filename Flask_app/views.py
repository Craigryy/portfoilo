from flask import request, jsonify,Blueprint
from config import db
from .models import BlogPost

views_bp = Blueprint('views_bp', __name__)


@views_bp.route('/upload', methods=['POST'])
def upload_photo():
    if 'photo' not in request.files:
        return jsonify({'error': 'No photo part'}), 400

    photo = request.files['photo']

    if photo.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    post = BlogPost(name=request.form['name'], content=request.form['content'], category_id=request.form['category_id'])
    db.session.add(post)
    db.session.commit()

    post.save_photo(photo)

    return jsonify({'message': 'Post created successfully'}), 201
