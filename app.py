from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)

def save_user(new_user):
    if os.path.exists('info.json'):
        with open('info.json','r') as f:
            users=json.load(f)
    else:
        users=[]

    users.append(new_user)

    with open('info.json', 'w') as f:
        json.dump(users, f, indent=4)

@app.route('/register', methods=['POST'])
def register():
    data=request.get_json()
    save_user(data)
    return jsonify({"status": "success", "message": "User registered!"})

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    with open('info.json', 'r') as f:
        all_users=json.load(f)
    for i in all_users:
        if i['username'] == data['username'] and i['password'] == data['password']:
            return jsonify({"status": "success", "message": "Login Successful!"})
    return jsonify({"status": "error", "message": "User not found or wrong password!"})

if __name__ == '__main__':
    app.run(debug=True)