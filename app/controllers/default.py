from app import app
from flask import render_template, request


@app.route("/inicio")
@app.route("/index")
@app.route("/")
def index():
    return render_template('index.html')


@app.route("/wifi")
def wifi():
    return render_template('wifi.html')


@app.route("/portas")
def portas():
    return render_template('portas.html')


@app.route("/sip")
def sip():
    return render_template('sip.html')
