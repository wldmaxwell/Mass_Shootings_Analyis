from flask import (
    Flask,
    render_template,
    jsonify)

from flask_pymongo import PyMongo

app = Flask(__name__)

#The database URI
app.config["MONGO_URI"] = "mongodb://localhost:27017/shootings_db"
mongo = PyMongo(app)

@app.route("/")
def home():
    """Render Home Page."""
    return render_template("index.html")


@app.route("/api/shootings")
def shootings():
    shooting_query = mongo.shootings.find()


if __name__ == '__main__':
    app.run(debug=True)


