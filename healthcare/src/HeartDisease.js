
import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import axios from "axios";




export default function HeartDisease() {
  const[newInputValue, setNewInputValue] = useState('');
    const [formData, setFormData] = useState({
      age: "",
      sex: "1",
      cp: "",
      // age, sex, cp, trestbps, chol, fbs, restecg, thalach, exang, oldpeak, slope, ca, thal
    //  trestbps:"",
      chol: "",
      fbs: "",
      restecg: "",
      thalach: "",
      // exang:"",
      // oldpeak: "",
      // slope:"",
      // ca: " ",
      // thal : "",
     
    });
  
    const [prediction, setPrediction] = useState(null);
    const [report, setReport] = useState(false);
    const [values, setValues] = useState({
      age: "",
      sex: "",
      cp: "",
      // trestbps:"",
      // age, sex, cp, trestbps, chol, fbs, restecg, thalach, exang, oldpeak, slope, ca, thal
    
      chol: "",
      fbs: "",
      restecg: "",
      thalach: "",
      // exang:"",
      // oldpeak: "",
      // slope:"",
      // ca: " ",
      // thal : "",
    
    });
  
    let label = "UNKNOWN"
    if (values.restecg >= 85) {
      label = "Poor";
    } else if (values.restecg >= 75) {
      label = "Average";
    } else if (values.restecg >= 65) {
      label = "Good";
    } else if (values.restecg >= 55) {
      label = "Excellent";
    } else if (values.restecg >= 50 && values.restecg < 55) {
      label = "Athlete";
    } else {
      label = "Abnormal";
    }
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
  
    const handleSubmit = async (e) => {
      e.preventDefault();
     setReport(true);
      try {
        const response = await axios.post(
          "http://127.0.0.1:5000/predict",
          formData,
          {
            headers: {
              "Content-Type": "application/json",
              Origin: "http://localhost:3000", // Replace with the actual URL of your React app
            },
          }
        );
        setPrediction(
          response.data.label === 1 ? "positive" : " REPORT : Negative"
        );
        setValues(formData);
      } catch (error) {
        console.error("Error predicting:", error);
      }
    };
    return (
      <div className="entire">
        <div className="side">
          <div className="hdocker">
            <h2 className="text-2xl font-serif font-bold">Heart Health Detection</h2>
            <form className="formbg" onSubmit={handleSubmit}>
              {/* Add form fields here */}
              <label>Name :</label>
              <input
  type="text"
  id="newInput"
  value={newInputValue}
  placeholder="Enter your name"
  onChange={(e) => setNewInputValue(e.target.value)}
/>
              <label>Age: </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                placeholder="Age"
                onChange={handleChange}
              />
              <label>Gender :</label>
  <select
    name="sex"
    value={formData.sex}
    onChange={handleChange}
  >
    <option value="1">Male</option>
    <option value="0">Female</option>
  </select>
             
              <label>Chest Pain Duration(in Days)</label>
              <input
                type="number"
                name="cp"
                value={formData.cp}
                placeholder="In Days"
                onChange={handleChange}
              />
              {/* <label>Resting Blood Pressure mmHg</label>
              <input
                type="number"
                name="trestbps"
                value={formData.trestbps}
                placeholder="Sex"
                onChange={handleChange}
              /> */}
              <label>Serum Cholestoral in mg/dl</label>
              <input
                type="number"
                name="chol"
                value={formData.chol}
                placeholder="Cholestrol "
                onChange={handleChange}
              />
              <label>Fasting Blood Sugar &gt; 120.00 mg/dl</label>
              <input
                type="number"
                name="fbs"
                value={formData.fbs}
                placeholder="Fasting Blood Sugar Level"
                onChange={handleChange}
              />
              <label>Resting Heart rate</label>
              <input
                type="number"
                name="restecg"
                value={formData.restecg}
                placeholder="Resting Heart Rate"
                onChange={handleChange}
              />
              <label>Maximum Heart Rate achieved</label>
              <input
                type="number"
                name="thalach"
                value={formData.thalach}
                placeholder="Heart Rate Acheived after exertion"
                onChange={handleChange}
              />
              {/* <label>Exercise Induced Angina</label>
              <input
                type="number"
                name="exang"
                value={formData.exang}
                placeholder="exang"
                onChange={handleChange}
              />
              <label>ST depression induced by exercise</label>
              <input
                type="number"
                name="oldpeak"
                value={formData.oldpeak}
                placeholder="Sex"
                onChange={handleChange}
              />
              <label>Slope of the peak exercise ST segment</label>
              <input
                type="number"
                name="slope"
                value={formData.slope}
                placeholder="slope"
                onChange={handleChange}
              />
              <label>Number of major vessels (0-3)</label>
              <input
                type="number"
                name="ca"
                value={formData.ca}
                placeholder="ca"
                onChange={handleChange}
              />
              <label>
                thalassemia: normal=0.00 / fixed defect=1 / reversable defect=2
              </label>
              <input
                type="number"
                name="thal"
                value={formData.thal}
                placeholder="thal"
                onChange={handleChange}
              /> */}
  
              {/* Add other form fields here */}
              <button  type="submit">Predict</button>
              <button
                onClick={() =>
                 window.location.reload()
                }
              >
                Reset
              </button>
            </form>
            {prediction && <p>Prediction: {prediction}</p>}
          </div>
  
          
  
          {report ? (
            <div className="report">
            <div className="repo" ref={divToCaptureRef}>
                <h1 className="tt">🩺Health Detector</h1>
               
              <h1 className="hea"> {prediction && <p>{prediction === "positive" ? "Result :  Unhealthy Heart! Consult a doctor" : "Result : Healthy Heart"}</p>}</h1>
              <p className="nonattri">➡️ Name : {newInputValue}</p>              
              <p className="nonattri">➡️ age : {values.age}</p>
              <p className="nonattri">➡️ gender : {values.sex === 0 ? "male" : "female"}</p>
              <p className="nonattri">➡️ chest pain duration : {values.cp}</p>
              {/* <p className="attri">trestbps : {values.trestbps}</p> */}
              <p className={values.chol<120 || values.chol>200 ? "attri" : "nonattri"}>➡️ cholestrol levels : {values.chol} {values.chol<120 || values.chol>200 ? "ABNORMAL" : "NORMAL"}</p>
              <p className={values.fbs<100 || values.fbs>125?"attri":"nonattri"}>➡️ blood sugar level : {values.fbs} {values.fbs<100 || values.fbs>125 ? "Not Normal ! check for diabetis" : "NORMAL"}</p>
              <p className={values.restecg < 40 ?"attri": "nonattri"}>➡️ Resting Heart Rate : {values.restecg} {label}</p>
              <p className="nonattri">➡️ Maximum Heart Rate achieved : {values.thalach}</p>
              {/* <p className="attri">exang : {values.exang}</p>
              <p className="attri">oldpeak : {values.oldpeak}</p> 
              <p className="attri">slope : {values.slope}</p> 
              <p className="attri">ca : {values.ca}</p>
              <p className="attri">thal : {values.thal}</p> */}
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
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
              {/* <label>💡for resting electrocardiogram: </label>
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
              </p> */}
            </div>
            
         )}
         </div>
         </div>
  
    );
    }
  