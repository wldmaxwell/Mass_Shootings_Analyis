from Api_Key import api_key
import requests
import pymongo
import pprint as pprint
import json

# Initialize PyMongo to work with MongoDBs
conn = 'mongodb://localhost:27017'
client = pymongo.MongoClient(conn)

# api link
url = "https://public.opendatasoft.com/api/records/1.0/search/?dataset=mass-shootings-in-america&rows=308&facet=city&facet=state&facet=shooter_sex&facet=shooter_race&facet=type_of_gun_general&facet=fate_of_shooter_at_the_scene&facet=shooter_s_cause_of_death&facet=school_related&facet=place_type&facet=relationship_to_incident_location&facet=targeted_victim_s_general&facet=possible_motive_general&facet=history_of_mental_illness_general&facet=military_experience"

#pulling json data from api link
requests = requests.get(url)
response = requests.json()

#inserts data(response) into database
collection.insert_one(response)

#pull data from database and assign variable shootings

shootings = db.shootings.find()

