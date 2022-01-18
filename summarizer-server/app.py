from flask import Flask, request, after_this_request
from flask.json import jsonify
from transformers import pipeline

app = Flask(__name__)
# another subproject idea: chat summarization: models: 'linydub/bart-large-samsum', 'lidiya/bart-large-xsum-samsum'

summarizer = pipeline("summarization", model="lidiya/bart-large-xsum-samsum")

@app.route("/", methods=["POST"])
def chat_summary():
    json = request.json
    chat_log = json["chatLog"]
    processed = summarizer(chat_log)
    return jsonify({
        "summaryText": processed[0]["summary_text"]
    })

@app.after_request
def after_request(response):
    header = response.headers
    header['Access-Control-Allow-Origin'] = '*'
    header['Access-Control-Allow-Headers']='Content-Type'
    return response