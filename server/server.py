from flask import Flask, jsonify
import subprocess

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/play', methods=['POST'])
def play():
    response = { "playing": True }
    subprocess.Popen(["afplay", "test.mp3"], stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    return jsonify(response)

@app.route('/pause', methods=['POST'])
def pause():
    subprocess.Popen(["killall", "afplay"], stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    response = { "playing": True }
    return jsonify(response)
