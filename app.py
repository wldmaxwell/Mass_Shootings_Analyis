from flask import Flask, render_template, redirect, jsonify
from flask_pymongo import PyMongo

app = Flask(__name__)

#The database URI
mongo = PyMongo(app, uri="mongodb://localhost:27017/shootings_db")


@app.route("/")
def home():

    # Find one record of data from the mongo database

    # Return template and data
    return render_template("index.html")

@app.route("/api/shootings")
def shootings():

    shootings = mongo.db.shootings.find()

    data = []
    for shooting in shootings:
        records = shooting['records']
        for record in records:

            date = record['fields']['date']
            state = record['fields']['state']
            latitude = record['fields']['latitude']
            longitude = record['fields']['longitude']
            data_dic = {'Latitude': latitude, 'Longitude': longitude, 'date': date, 'state': state}
            data.append(data_dic)

    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)


