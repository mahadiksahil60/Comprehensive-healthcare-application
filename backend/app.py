from flask import Flask,render_template,request, jsonify
from flask_cors import CORS, cross_origin 
import pickle
import pandas as pd
import tensorflow as tf
from tensorflow import keras
import os
import numpy as np
from tqdm import tqdm
import tensorflow.keras as K
from tensorflow.keras.preprocessing import image
from tensorflow.keras.preprocessing.image import img_to_array
from keras.models import load_model
# from keras.applications.xception import preprocess_input
# from efficientnet import preprocess_input
from tensorflow.keras.applications import EfficientNetB3
from tensorflow.keras.applications.efficientnet import preprocess_input

from werkzeug.utils import secure_filename


# Initialize CORS with your Flask app

app = Flask(__name__)
CORS(
    app,
    resources={
        r"/predict/*": {
            "origins": "http://localhost:3000",
            "methods": ["OPTIONS","GET", "POST","PUT", "DELETE"],
            "allow_headers": ["Content-Type", "Authorization", "Origin", "X-Auth-Token"],
        },
        r"/skindisease/*": {
            "origins": "http://localhost:3000",
            "methods": ["OPTIONS", "GET", "POST", "PUT", "DELETE"],
            "allow_headers": ["Content-Type", "Authorization", "Origin", "X-Auth-Token"],
        },
    },
)


heart_disease_model = pickle.load(open("D:/Comprehensive-healthcare-application/backend/Saved models/heart_disease_model.sav","rb",))
obesity_model = pickle.load(open("D:/Comprehensive-healthcare-application/backend/Saved models/obesity_model.sav","rb",))
# cancer_model = pickle.load(open("C:/Users/Sahil/Desktop/New folder/project/backend/Saved models/cancer_model.sav","rb",))
model = load_model("D:/Skin Disease Clssification-99.52.h5")
UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
@app.route('/')
def home():
    return "Your backend is active and working"


@app.route('/predict', methods=['POST'])
@cross_origin()
def predict():
    data = request.json
    age = data.get('age')
    sex = data.get('sex')
    cp = data.get('cp')
    trestbps = data.get('trestbps',60.00)
    chol = data.get('chol')
    fbs = data.get('fbs')
    restecg = data.get('restecg')
    thalach = data.get('thalach')
    exang = data.get('exang', 0.00)
    oldpeak = data.get('oldpeak',0.5)
    slope = data.get('slope',0.5)
    ca = data.get('ca',1)
    thal = data.get('thal',0.00)

    result = heart_disease_model.predict([[age, sex, cp,trestbps,  chol, fbs, restecg, thalach, exang, oldpeak, slope, ca, thal]])

    if result == 1:
        return jsonify({ "label" : 1 })
    else:
        return jsonify({ "label" : -1 })
    
@app.route('/obesity', methods=['POST'])
@cross_origin()
def predictObese():
    data = request.json
    gender = data.get('gender')
    age = data.get('age')
    height = data.get('height')
    weight = data.get('weight')
    family_history_with_overweight = data.get('family_history_with_overweight')
    caloric_food = data.get('caloric_food')
    vegetables = data.get('vegetables')
    number_meals = data.get('number_meals')
    food_between_meals = data.get('food_between_meals')
    smoke = data.get('smoke')
    water = data.get('water')
    calories = data.get('calories')
    activity = data.get('activity')
    tech0logy = data.get('tech0logy')      
    alcohol = data.get('alcohol')      
    
    
    result = obesity_model.predict([[
                    gender,
                    age,
                    height,
                    weight,
                    family_history_with_overweight,
                    caloric_food,
                    vegetables,
                    number_meals,
                    food_between_meals,
                    smoke,
                    water,
                    calories,
                    activity,
                    tech0logy,
                    alcohol,]])   # gender,
    
    if result == 1:
        return jsonify({ "label" : 1 })
    else:
        return jsonify({ "label" : -1 })
                    


   
@app.route('/lungs', methods=['POST'])
@cross_origin()
def Lungs():
    data = request.json
    AGE = data.get('AGE')
    SMOKING = data.get('SMOKING')
    YELLOW_FINGERS = data.get('YELLOW_FINGERS')
    ANXIETY = data.get('ANXIETY')
    PEER_PRESSURE = data.get('PEER_PRESSURE', 0)
    CHRONIC_DISEASE = data.get('CHRONIC_DISEASE')
    FATIGUE = data.get('FATIGUE')
    ALLERGY =  data.get('ALLERGY')
    WHEEZING = data.get('WHEEZING')
    ALCOHOL_CONSUMING = data.get('ALCOHOL_CONSUMING')
    COUGHING = data.get('COUGHING')
    SHORTNESS_OF_BREATH = data.get('SHORTNESS_OF_BREATH')
    SWALLOWING_DIFFICULTY = data.get('SWALLOWING_DIFFICULTY')
    CHEST_PAIN = data.get('CHEST_PAIN')

    
    result = cancer_model.predict([[
                   
                       AGE,
                    SMOKING,
                    YELLOW_FINGERS,
                    ANXIETY,
                    PEER_PRESSURE,
                    CHRONIC_DISEASE,
                    FATIGUE,
                    ALLERGY,
                    WHEEZING,
                    ALCOHOL_CONSUMING,
                    COUGHING,
                    SHORTNESS_OF_BREATH,
                    SWALLOWING_DIFFICULTY,
                    CHEST_PAIN,
                    ]])   # gender,
    
    if result == 1:
        return jsonify({ "label" : 1 })
    else:
        return jsonify({ "label" : -1 })
    

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


def preprocess_image(img):
    img = image.load_img(img, target_size=(150, 150))
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array = preprocess_input(img_array)
    return img_array




@app.route('/skindisease', methods=['POST'])
def skindisease():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})

    file = request.files['file']
    print(file)
    if file.filename == '':
        return jsonify({'error': 'No selected file'})

    if file and allowed_file(file.filename):
        # Secure filename and save the file
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))

        # Make predictions on the uploaded image
        img_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        img_array = preprocess_image(img_path)
        predictions = model.predict(img_array)
        print(predictions)

        # Cleanup old files (customize this based on your strategy)
        

        # Convert predictions to a JSON response
        # predictions_strings = [str(value) for value in predictions.tolist()]
        predictions_list = predictions.flatten().tolist()
        response = {'predictions': predictions_list}
        return jsonify(response)

    else:
        return jsonify({'error': 'Invalid file format'})













if __name__ == '__main__':
    app.run(debug=True)

