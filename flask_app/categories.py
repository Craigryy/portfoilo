from config import db 
import datetime
from .models import Categories
from flask import Flask,Blueprint,make_response,jsonify,request

category_bp = Blueprint('category_bp', __name__)

@category_bp.route('/categories/',methods=['GET'])
def list_all_categories():
    """
    List all categories.
    """
    categories_files = Categories.query.all()
    return make_response(jsonify([category.to_json() for category in categories_files]), 200)


@category_bp.route('/categories/<int:id>',methods=['GET'])
def get_one_category(id):
    """
    Get a single category.
    """
    try :
        category=Categories.query.filter_by(id=id).first()
        if not category or id is None:
            raise Exception("Category doesnot exist")
            return jsonify({'status':True,'data':[category.to_json()]})
        else:
            return jsonify({
                'status'    : True ,
                "message"   :"success",
                'data'      : [category.to_json()]
                })
    except Exception as e:
        print (e,"error")
        return jsonify({"status":False ,"msg":"Error"})

@category_bp.route('/categories/',methods=['POST'])
def create_new_category ():
    """
    Create a category .
    """
    json_data = request.get_json()
    name = json_data['name']
    category = Categories(name=name)
    category.save()

    return jsonify({'Category': category.to_json()})

@category_bp.route('/categories/<int:id>',methods=['PUT'])
def update_category (id):
    """
    Update a category.
    """
    try:
        category = Categories.query.filter_by(id=id).first()
        if category:
            data = request.get_json()
            category.name = data['name']
            db.session.commit()
            return make_response(jsonify({'message': 'Category updated successfully'}), 200)
        return make_response(jsonify({'message': 'Category not found'}), 404)
    except Exception as e:
        error_message = f"Error updating category: {str(e)}"
        return make_response(jsonify({'message': error_message}), 500)


@category_bp.route('/categories/<int:id>',methods=['DELETE'])
def delete_category(id):
    """
    Delete a category.
    """
    try:
        category = Categories.query.filter_by(id=id).delete()
        if not category:
            raise jsonify({"message":"No category with that ID found","status":True},404)
        else:
            category.delete()
            return jsonify({"message":"Successfully deleted Category","status":True},201)
    except Exception as error:
        return jsonify({"message":str(error),"status": False})


