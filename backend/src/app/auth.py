from app import app
from flask import request, jsonify, session, url_for, redirect
from db.crud import check_user_login, add_user, is_user_data_unique

@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")
    
    user = check_user_login(username, password)
    if user is not None:
        session["user_id"] = str(user.id)
        print("New user")
        
        return jsonify({"message": "User was successfully logged in"}), 200
    else:
        return jsonify({"error": "Invalid username or password"}), 401


@app.route("/login/signup", methods=["POST"])
def signup():
    data = request.get_json()
    
    username = data.get("username")
    email = data.get("email")
    password = data.get("password")
    
    if is_user_data_unique(username, email):
        new_user = add_user(username, email, password)
        session["user_id"] = new_user.id
        
        return jsonify({"message": "User profile was created and successfully logged in"}), 200
    
    else:
        return jsonify({"error": ""})