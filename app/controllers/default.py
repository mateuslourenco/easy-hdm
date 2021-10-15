from app import app
from flask import render_template


@app.route("/inicio")
@app.route("/index")
@app.route("/")
def index():
    return render_template('index.html')


@app.route("/wifi")
def wifi():
    return render_template(
        'wifi.html',
        canais_dois=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        canais_cinco=[36, 40, 44, 48, 52, 56, 60, 64, 100, 104, 108, 112, 116, 120, 124, 128, 149, 153, 157, 161]
    )


@app.route("/portas")
def portas():
    return render_template('portas.html')


@app.route("/sip")
def sip():
    return render_template('sip.html')


@app.route("/<string:pagina>")
def error(pagina):
    return f'<h1>A pagina ({pagina}) não foi localizada</h1>'
