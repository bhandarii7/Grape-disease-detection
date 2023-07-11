from __future__ import division, print_function
# coding=utf-8
import sys
import os
import glob
import re
import numpy as np

from flask_cors import CORS




# keras
import tensorflow as tf
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import img_to_array
# from keras import load_img
from keras.models import load_model
from keras.preprocessing import image
import cv2
import pickle

# Flask utils
from flask import Flask, request, render_template
from werkzeug.utils import secure_filename
from gevent.pywsgi import WSGIServer

# Define a flask app
app = Flask(__name__)


CORS(app)

CORS(app, origins=["http://localhost:3000"])


# Model saved with Keras model.save()
MODEL_PATH = './model/resnet101.h5'

# Load your trained model
model = load_model(MODEL_PATH)

# Load the label binarizer from disk
label_transform = pickle.load(open('label_transform.pkl', 'rb'))


print('Model loaded. Check http://127.0.0.1:5000/')


def model_predict(img_path, model):
    image = cv2.imread(img_path)
    image = cv2.resize(image, (224, 224))
    image = img_to_array(image)
    image = np.expand_dims(image, axis=0)
    preds = model.predict(image)
    predicted_class = label_transform.classes_[np.argmax(preds)]
    return predicted_class


@app.route('/predict', methods=['GET', 'POST'])
def upload():
    if request.method == 'POST':
        # Get the file from post request
        f = request.files['file']

        # Save the file to ./uploads
        basepath = os.path.dirname(__file__)
        file_path = os.path.join(
            basepath, 'uploads', secure_filename(f.filename))
        f.save(file_path)

        # Make prediction
        preds = model_predict(file_path, model)

        if preds=='Grape___Black_rot':
            return 'Black rot'
        elif preds=='Grape___Esca_(Black_Measles)':
            return 'Black Measles'
        elif preds=='Grape___healthy':
            return 'Healthy Leaf'
        elif preds=='Grape___Leaf_blight_(Isariopsis_Leaf_Spot)':
            return 'Isariopsis leaf'
        else:
            return 'Unknown data'
        
      

if __name__ == '__main__':
    app.run(debug=True)

