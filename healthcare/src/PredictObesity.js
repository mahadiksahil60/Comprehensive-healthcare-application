import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import axios from "axios";







export default function PredictObesity(){
    const [formData, setFormData] = useState({
      gender: "",
      age: "",
      height: "",
      weight: "",
      // age, sex, cp, trestbps, chol, fbs, restecg, thalach, exang, oldpeak, slope, ca, thal
      family_history_with_overweight: "",
      caloric_food: "",
      vegetables: "",
      number_meals: "",
      food_between_meals: "",
      smoke: "",
      water: "",
      calories: "",
      activity: "",
      tech0logy: "",
      alcohol: "",
    });
  
    
    const [prediction, setPrediction] = useState(null);
    const [report, setReport] = useState(false);
    const [values, setValues] = useState({
      gender: "",
      age: "",
      height: "",
      weight: "",
      // age, sex, cp, trestbps, chol, fbs, restecg, thalach, exang, oldpeak, slope, ca, thal
      family_history_with_overweight: "",
      caloric_food: "",
      vegetables: "",
      number_meals: "",
      food_between_meals: "",
      smoke: "",
      water: "",
      calories: "",
      activity: "",
      tech0logy: "",
      alcohol: "",
    });
  
    const divToCaptureRef = useRef(null);
  
    const generatePDF = () => {
      if (!divToCaptureRef.current) return;
  
      const pdf = new jsPDF("p", "mm", "a4");
  
      html2canvas(divToCaptureRef.current).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        pdf.addImage(imgData, "PNG", 10, 10, 190, 0);
        pdf.save("healthdetectionreport.pdf");
      });
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleReset = ()=> {
      setReport(false);
      setFormData({
        gender: "",
  age: "",
  height: "",
  weight: "",
  // age, sex, cp, trestbps, chol, fbs, restecg, thalach, exang, oldpeak, slope, ca, thal
  family_history_with_overweight: "",
  caloric_food: "",
  vegetables: "",
  number_meals: "",
  food_between_meals: "",
  smoke: "",
  water: "",
  calories: "",
  activity: "",
  tech0logy: "",
  alcohol: "",
      })
  
      
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault();
     setReport(true);
     if(formData.age === '' || formData.gender === '' || formData.height === ' ' || formData.weight === ' ' || formData.family_history_with_overweight === '' || 
     formData.caloric_food === '' || formData.vegetables === ''  || formData.number_meals === '' || formData.smoke === ' ' || formData.water === '' || FormData.calories === '' 
     || formData.activity === '' || formData.tech0logy === '' || formData.alcohol === ''){
      alert('Please fill up all the blank fields! Leaving an field empty will result in highly inefficient output');
     }
     else{
      try {
        const response = await axios.post(
          "http://127.0.0.1:5000/obesity",
          formData,
          {
            headers: {
              "Content-Type": "application/json",
              Origin: "http://localhost:3000", // Replace with the actual URL of your React app
            },
          }
        );
        setPrediction(
          response.data.label === 1 ? " REPORT : Obesity found" : " REPORT : Not Obese"
        );
        setValues(formData);
      } catch (error) {
        console.error("Error predicting:", error);
      }
    }
    };
  
    return (
      <div className="entire">
        <div className="side">
          <div className="hdocker">
            <h2>Obesity Detection System</h2>
            <form className="formbg" onSubmit={handleSubmit}>
              {/* Add form fields here */}
              <label>gender (0 for female/1 for male): </label>
              <input
                type="number"
                name="gender"
                value={formData.gender}
                placeholder="gender"
                onChange={handleChange}
              />
              <label>age:</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                placeholder="your age"
                onChange={handleChange}
              />
             
              <label>height in metres: </label>
              <input
                type="number"
                name="height"
                value={formData.height}
                placeholder="height"
                onChange={handleChange}
              />
              <label>weight in kgs: </label>
              <input
                type="number"
                name="weight"
                value={formData.weight}
                placeholder="weight"
                onChange={handleChange}
              />
              <label>Family history with overweight : (Yes=1/N0=0)</label>
              <input
                type="number"
                name="family_history_with_overweight"
                value={formData.family_history_with_overweight}
                placeholder="family's history with obesity"
                onChange={handleChange}
              />
              <label>Consumption of high caloric food (Yes=1/no-0)</label>
              <input
                type="number"
                name="caloric_food"
                value={formData.caloric_food}
                placeholder="do you eat food that is high in calories"
                onChange={handleChange}
              />
              <label>Frequency of consumption of vegetables: (1, 2 or 3)</label>
              <input
                type="number"
                name="vegetables"
                value={formData.vegetables}
                placeholder="how often do you eat vegetables"
                onChange={handleChange}
              />
              <label>Number of main meals:</label>
              <input
                type="number"
                name="number_meals"
                value={formData.number_meals}
                placeholder="number of main meals"
                onChange={handleChange}
              />
              <label>Food between meals frequancy : (1, 2, 3 or 4)</label>
              <input
                type="number"
                name="food_between_meals"
                value={formData.food_between_meals}
                placeholder="frequency of food between meals"
                onChange={handleChange}
              />
              <label>Smoking: (Yes=1/No=0)</label>
              <input
                type="number"
                name="smoke"
                value={formData.smoke}
                placeholder="Do you smoke"
                onChange={handleChange}
              />
              <label>Consumption of water daily: (1, 2 or 3)</label>
              <input
                type="number"
                name="water"
                value={formData.water}
                placeholder="Daily consumption of water"
                onChange={handleChange}
              />
              <label>Calories consumption monitoring: (Yes=1/No=0)</label>
              <input
                type="number"
                name="calories"
                value={formData.calories}
                placeholder="Do you monitor and eat your maintainance calories"
                onChange={handleChange}
              />
              <label>
              Physical activity frequency: (0, 1, 2 or 3)
              </label>
              <input
                type="number"
                name="activity"
                value={formData.activity}
                placeholder="How many workouts in a day?"
                onChange={handleChange}
              />
              <label>
              Time using technology devices: (0, 1 or 2)
              </label>
              <input
                type="number"
                name="tech0logy"
                value={formData.tech0logy}
                placeholder="How frequently you spend time on screen ?"
                onChange={handleChange}
              />
              <label>
              Consumption of alcohol frequency: (0, 1, 2 or 3)
              </label>
              <input
                type="number"
                name="alcohol"
                value={formData.alcohol}
                placeholder="How many times do you drink in a day?"
                onChange={handleChange}
              />
  
              {/* Add other form fields here */}
              <button type="submit">Predict</button>
              <button
                onClick={()=>{window.location.reload();}}
              >
                Reset
              </button>
            </form>
            {prediction && <p>Prediction: {prediction}</p>}
          </div>
  
          {report ? (
            <div className="report">
            <div className="repo" ref={divToCaptureRef}>
                <h1>🩺Health Detector</h1>
               
              <h1 className="hea"> {prediction && <p>{prediction}</p>}</h1>
              
              <p className="attri">alcohol : {values.alcohol}</p>
              <p className="attri">height : {values.height}</p>
              <p className="attri">weight : {values.weight}</p>
              <p className="attri">family history : {values.family_history_with_overweight}</p>
              <p className="attri">calories : {values.caloric_food}</p>
              <p className="attri">Frequency of eating vegetables : {values.vegetables}</p>
              <p className="attri">Frequency of meals : {values.number_meals}</p>
              <p className="attri">Frequency of food between meals : {values.food_between_meals}</p>
              <p className="attri">Smoking : {values.smoke}</p>
              <p className="attri">Water Consumption : {values.water}</p>
              <p className="attri">calories monitoring: {values.calories}</p> 
              <p className="attri">Physical activity frequency : {values.activity}</p>
              <p className="attri">Screen time : {values.tech0logy}</p>
              <p className="note">This health detection
      machine learning project serves as an educational tool and should not be
      considered a substitute for professional medical advice,<br/> diagnosis, or
      treatment. It is of utmost importance that users exercise caution and
      consult a qualified healthcare professional, such as a doctor, before
      making any healthcare decisions.</p>
         </div>
         <button onClick={generatePDF}>Generate PDF</button>
            </div>
           ):( 
            <div className="info">
              <h1>Heart conditions of a normal person for reference.</h1>
              <label>💡for resting blood pressure: </label>
              <p>
                Ideal blood pressure is considered to be between 90/60mmHg and
                120/80mmHg. high blood pressure is considered to be 140/90mmHg or
                higher. low blood pressure is considered to be below 90/60mmHg.
              </p>
              <label>💡for cholesterol levels :</label>
              <p>
                Here are the ranges for total cholesterol in adults: Normal: Less
                than 200 mg/dL. Borderline high: 200 to 239 mg/dL. High: At or
                above 240 mg/dL.
              </p>
              <label>💡for glucose levels :</label>
              <p>
                The expected values for normal fasting blood glucose concentration
                are between 70 mg/dL (3.9 mmol/L) and 100 mg/dL (5.6 mmol/L). When
                fasting blood glucose is between 100 to 125 mg/dL (5.6 to 6.9
                mmol/L)
              </p>
              <label>💡for resting electrocardiogram: </label>
              <p>
                An electrocardiogram (ECG) test measures the electrical activity
                of the heart. A normal resting heart rate is 60 to 100 beats per
                minute.
              </p>
              <label>💡for ST depression due to Excercise: </label>
              <p>
                ST segment depression less than 0.5 mm is accepted in all leads.
                ST segment depression 0.5 mm or more is considered pathological.
                Some expert consensus documents also note that any ST segment
                depression in V2–V3 should be considered abnormal (because healthy
                individuals rarely display depressions in those leads).
              </p>
            </div>
            
         )}
         </div>
         </div>
  
    );
   
  };
  