from app import app


@app.route("/")
def index():
    return "Hello World!"


@app.route("/redes")
def redes():
    return "Redes"
