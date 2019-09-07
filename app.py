from flask import Flask, render_template, redirect, jsonify
from flask_pymongo import PyMongo

app = Flask(__name__)

#The database URI
mongo = PyMongo(app, uri="mongodb://localhost:27017/shootings_db")


@app.route("/")
def home():

    # Find one record of data from the mongo database

    # Return template and data
    return render_template("dashboard.html")

# create restful api using URL created when creating the database
@app.route("/api/shootings")
def shootings():

    shootings = mongo.db.shootings.find()

    data = []
    for shooting in shootings:
        records = shooting['records']
        for record in records:

            date = record['fields']['date']
            state = record['fields']['state']
            place = record['fields']['place_type']
            race = record['fields']['shooter_race']
            age = record['fields'].get('shooter_age_s')
            # When properties are void of values: record['fields'].get('shooter_age_s')
            mental_illness = record['fields'].get('history_of_mental_illness_general')
            day = record['fields']['day_of_week']
            latitude = record['fields']['latitude']
            longitude = record['fields']['longitude']
            location = [latitude, longitude]
            fatalities = record ['fields']['total_number_of_fatalities']
            gender = record ['fields']['shooter_sex']
            weapon = record ['fields']['type_of_gun_general']
            data_dic = {'Location': location,'Latitude': latitude, 'Longitude': longitude, 'Date': date, 'State': state, 'Place': place, 'Race': race, 'Mental Illness': mental_illness,'Age': age, 'Day': day, 'Fatalities': fatalities, 'Gender': gender, 'Weapon': weapon}
            data.append(data_dic)

    return jsonify(data)

@app.route("/maps")
def maps():

    # Find one record of data from the mongo database

    # Return template and data
    return render_template("maps.html")

@app.route("/api/map")
def mapping():

    shootings = mongo.db.shootings.find()

    stuff = []
    for shooting in shootings:
        records = shooting['records']
        for record in records:

            date = record['fields']['date']
            state = record['fields']['state']
            place = record['fields']['place_type']
            race = record['fields']['shooter_race']
            age = record['fields'].get('shooter_age_s')
            # When properties are void of values: record['fields'].get('shooter_age_s')
            mental_illness = record['fields'].get('history_of_mental_illness_general')
            day = record['fields']['day_of_week']
            latitude = record['fields']['latitude']
            longitude = record['fields']['longitude']
            location = [latitude, longitude]
            fatalities = record ['fields']['total_number_of_fatalities']
            gender = record ['fields']['shooter_sex']
            weapon = record ['fields']['type_of_gun_general']
            data_dic = {'Location': location,'Latitude': latitude, 'Longitude': longitude, 'Date': date, 'State': state, 'Place': place, 'Race': race, 'Mental Illness': mental_illness,'Age': age, 'Day': day, 'Fatalities': fatalities, 'Gender': gender, 'Weapon': weapon}
            stuff.append(data_dic)

    return jsonify(stuff)



if __name__ == '__main__':
    app.run(debug=True)


