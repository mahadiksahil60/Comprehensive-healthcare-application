
// with col1:
// AGE = st.number_input("Age of the patient", min_value = 0.00)
// with col2:
// SMOKING = st.selectbox("Smoking: YES=1 , NO=0", (0, 1))
// with col3:
// YELLOW_FINGERS = st.selectbox("Yellow fingers: YES=1 , NO=0", (0, 1))
// with col1:
// ANXIETY = st.selectbox("Anxiety: YES=1 , NO=0", (0, 1))
// with col2:
// PEER_PRESSURE = st.selectbox("Peer_pressure: YES=1 , NO=0", (0, 1))
// with col3:
// CHRONIC_DISEASE = st.selectbox("Chronic Disease: YES=1 , NO=0", (0, 1))
// with col1:
// FATIGUE = st.selectbox("Fatigue: YES=1 , NO=0", (0, 1))
// with col2:
// ALLERGY = st.selectbox("Allergy: YES=1 , NO=0", (0, 1))
// with col3:
// WHEEZING = st.selectbox("Wheezing: YES=1 , NO=0", (0, 1))
// with col1:
// ALCOHOL_CONSUMING = st.selectbox("Alcohol: YES=1 , NO=0", (0, 1))
// with col2:
// COUGHING = st.selectbox("Coughing: YES=1 , NO=0", (0, 1))
// with col3:
// SHORTNESS_OF_BREATH = st.selectbox("Shortness of Breath: YES=1 , NO=0", (0, 1))
// with col1:
// SWALLOWING_DIFFICULTY = st.selectbox(
//     "Swallowing Difficulty: YES=1 , NO=0", (0, 1)
// )
// with col2:
// CHEST_PAIN = st.selectbox("Chest pain: YES=1 , NO=0", (0, 1))
// # code for Prediction
// # creating a button for Prediction


import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import axios from "axios";




export default function LungDisease() {
  
  const[newInputValue, setNewInputValue] = useState('');
    const [formData, setFormData] = useState({
    
      AGE: "",
      SMOKING: "0",
      YELLOW_FINGERS: "0",
      
      ANXIETY: "0",
      // PEER_PRESSURE: "0",
      CHRONIC_DISEASE: "0",
      FATIGUE: "0",
      ALLERGY:"0",
      WHEEZING: "0",
      ALCOHOL_CONSUMING:"0",
      COUGHING: "0",
      SHORTNESS_OF_BREATH : "0",
      SWALLOWING_DIFFICULTY : "0",
      CHEST_PAIN :"0",
     
    });
  
    const [prediction, setPrediction] = useState(null);
    const [report, setReport] = useState(false);
    const [values, setValues] = useState({
     
            AGE: "",
      SMOKING: "0",
      YELLOW_FINGERS: "0",
      
      ANXIETY: "0",
      // PEER_PRESSURE: "0",
      CHRONIC_DISEASE: "0",
      FATIGUE: "0",
      ALLERGY:"0",
      WHEEZING: "0",
      ALCOHOL_CONSUMING:"0",
      COUGHING: "0",
      SHORTNESS_OF_BREATH : "0",
      SWALLOWING_DIFFICULTY : "0",
      CHEST_PAIN :"0",
    
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
      console.log(`Name: ${name}, Value: ${value}`);
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
     setReport(true);
      try {
        const response = await axios.post(
          "http://127.0.0.1:5000/lungs",
          formData,
          {
            headers: {
              "Content-Type": "application/json",
              Origin: "http://localhost:3000", // Replace with the actual URL of your React app
            },
          }
        );
        setPrediction(
          response.data.label === 1 ? "positive" : "Negative"
         
        );
        console.log(response.data.label);
        setValues(formData);
      } catch (error) {
        console.error("Error predicting:", error);
      }
    };
    return (
      <div className="entire">
        <div className="side">
          <div className="hdocker">
            <h2>Lung Health Detection</h2>
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
                name="AGE"
                value={formData.AGE}
                placeholder="Age"
                onChange={handleChange}
              />
                {/* <label>Age: </label>
              <input
                type="number"
                name="SMOKING"
                value={formData.SMOKING}
                placeholder="Age"
                onChange={handleChange}
              />
                    <label>Age: </label>
              <input
                type="number"
                name="YELLOW_FINGERS"
                value={formData.YELLOW_FINGERS}
                placeholder="Age"
                onChange={handleChange}
              />
                    <label>Age: </label>
              <input
                type="number"
                name="ANXIETY"
                value={formData.ANXIETY}
                placeholder="Age"
                onChange={handleChange}
              />
                    <label>Age: </label>
              <input
                type="number"
                name="PEER_PRESSURE"
                value={formData.PEER_PRESSURE}
                placeholder="Age"
                onChange={handleChange}
              />
                    <label>Age: </label>
              <input
                type="number"
                name="CHRONIC_DISEASE"
                value={formData.CHRONIC_DISEASE}
                placeholder="Age"
                onChange={handleChange}
              />
                    <label>Age: </label>
              <input
                type="number"
                name="FATIGUE"
                value={formData.FATIGUE}
                placeholder="Age"
                onChange={handleChange}
              />
                    <label>Age: </label>
              <input
                type="number"
                name="ALLERGY"
                value={formData.ALLERGY}
                placeholder="Age"
                onChange={handleChange}
              />
                    <label>Age: </label>
              <input
                type="number"
                name="WHEEZING"
                value={formData.WHEEZING}
                placeholder="Age"
                onChange={handleChange}
              />
                    <label>Age: </label>
              <input
                type="number"
                name="ALCOHOL_CONSUMING"
                value={formData.ALCOHOL_CONSUMING}
                placeholder="Age"
                onChange={handleChange}
              />
                    <label>Age: </label>
              <input
                type="number"
                name="COUGHING"
                value={formData.COUGHING}
                placeholder="Age"
                onChange={handleChange}
              />
               <input
                type="number"
                name="SHORTNESS_OF_BREATH"
                value={formData.SHORTNESS_OF_BREATH}
                placeholder="Age"
                onChange={handleChange}
              />
               <input
                type="number"
                name="SWALLOWING_DIFFICULTY"
                value={formData.SWALLOWING_DIFFICULTY}
                placeholder="Age"
                onChange={handleChange}
              />
               <input
                type="number"
                name="CHEST_PAIN"
                value={formData.CHEST_PAIN}
                placeholder="Age"
                onChange={handleChange}
              /> */}

             <label>Do you smoke :</label>
  <select
    name="SMOKING"
    value={formData.SMOKING}
    onChange={handleChange}
  >
    <option value="1">Yes</option>
    <option value="0">No</option>
  </select>
  <label>Yellow Fingers</label>
  <select
    name="YELLOW_FINGERS"
    value={formData.YELLOW_FINGERS}
    onChange={handleChange}
  >
    <option value="1">Yes</option>
    <option value="0">No</option>
  </select>
  <label>Anxiety</label>
  <select
    name="ANXIETY"
    value={formData.ANXIETY}
    onChange={handleChange}
  >
    <option value="1">Yes</option>
    <option value="0">No</option>
  </select>
  {/* <select
    name="PEER_PRESSURE"
    value={formData.PEER_PRESSURE}
    onChange={handleChange}
  >
    <option value="1">Yes</option>
    <option value="0">No</option>
  </select> */}
  <label>Chronic disease :</label>
  <select
    name="CHRONIC_DISEASE"
    value={formData.CHRONIC_DISEASE}
    onChange={handleChange}
  >
    <option value="1">Yes</option>
    <option value="0">No</option>
  </select>
  <label>Fatigue :</label>
  <select
    name="FATIGUE"
    value={formData.FATIGUE}
    onChange={handleChange}
  >
    <option value="1">Yes</option>
    <option value="0">No</option>
  </select>
  <label>Allergy</label>
  <select
    name="ALLERGY"
    value={formData.ALLERGY}
    onChange={handleChange}
  >
    <option value="1">Yes</option>
    <option value="0">No</option>
  </select>
  <label>Wheezing :</label>
  <select
    name="WHEEZING"
    value={formData.WHEEZING}
    onChange={handleChange}
  >
    <option value="1">Yes</option>
    <option value="0">No</option>
  </select>
  <label>alcohol</label>
  <select
    name="ALCOHOL_CONSUMING"
    value={formData.ALCOHOL_CONSUMING}
    onChange={handleChange}
  >
    <option value="1">Yes</option>
    <option value="0">No</option>
  </select>
  <label>coughing :</label>
  <select
    name="COUGHING"
    value={formData.COUGHING}
    onChange={handleChange}
  >
    <option value="1">Yes</option>
    <option value="0">No</option>
  </select>
  <label>Shortness of breath :</label>
  <select
    name="SHORTNESS_OF_BREATH"
    value={formData.SHORTNESS_OF_BREATH}
    onChange={handleChange}
  >
    <option value="1">Yes</option>
    <option value="0">No</option>
  </select>
  <label>swallowing Difficulty</label>
  <select
    name="SWALLOWING_DIFFICULTY"
    value={formData.SWALLOWING_DIFFICULTY}
    onChange={handleChange}
  >
    <option value="1">Yes</option>
    <option value="0">No</option>
  </select>
  <label>Chest Pain :</label>
   <select
    name="CHEST_PAIN"
    value={formData.CHEST_PAIN}
    onChange={handleChange}
  >
    <option value="1">Yes</option>
    <option value="0">No</option>
  </select>
              {/* Add other form fields here */}
              <button type="submit">Predict</button>
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
               {console.log(prediction)}
              <h1 className="hea"> {prediction && <p>{prediction  === "positive" ? "Result :  Unhealthy Lungs! Consult a doctor" : "Result : Healthy Lungs"}</p>}</h1>
              <p className="nonattri">➡️ Name : {newInputValue}</p>              
              <p className="nonattri">➡️ age : {values.AGE}</p>
              <p className={values.SMOKING === 1 ? "attri" : "nonattri"}>➡️ smoking addiction : {formData.SMOKING}</p>
              <p className={values.YELLOW_FINGERS === 1 ? "attri" : "nonattri"}>➡️ Yellow Fingers : {formData.YELLOW_FINGERS}</p>
              {/* <p className="attri">trestbps : {values.trestbps}</p> */}
              <p className={values.ANXIETY === 1 ? "attri" : "nonattri"}>➡️ Anxiety : {formData.ANXIETY}</p>
              <p className={values.CHRONIC_DISEASE === 1 ? "attri" : "nonattri"}>➡️ History With Chronic Disease : {formData.CHRONIC_DISEASE} </p>
              <p className={values.FATIGUE === 1 ? "attri" : "nonattri"}>➡️ Fatigue : {formData.FATIGUE}</p>
              <p className={values.ALLERGY === 1 ? "attri" : "nonattri"}>➡️ Allergy: {formData.ALLERGY}</p>
              <p className={values.WHEEZING === 1 ? "attri" : "nonattri"}>➡️ Frequent Wheezing: {formData.WHEEZING}</p>
              <p className={values.ALCOHOL_CONSUMING === 1 ? "attri" : "nonattri"}>➡️ Consumption of alcohol: {formData.ALCOHOL_CONSUMING}</p>
              <p className={values.COUGHING === 1 ? "attri" : "nonattri"}>➡️ Frequent Coughing : {formData.COUGHING}</p>
              <p className={values.SHORTNESS_OF_BREATH === 1 ? "attri" : "nonattri"}>➡️ Shortness Of Breath: {formData.SHORTNESS_OF_BREATH}</p>
              <p className={values.SWALLOWING_DIFFICULTY === 1 ? "attri" : "nonattri"}>➡️ Difficulty in Swallowing : {formData.SWALLOWING_DIFFICULTY}</p>
              <p className={values.CHEST_PAIN === 1 ? "attri" : "nonattri"}>➡️ Chest Pain: {formData.CHEST_PAIN}</p>
              <p> 0-No || 1-Yes</p>
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
              <h1>Take care of your lungs!.</h1>
              <label>💡 Common Lung Conditions : </label>
              <p>
              Several lung conditions can affect lung health, including asthma, chronic obstructive pulmonary disease (COPD), pneumonia, and lung cancer. Understanding the symptoms and risk factors for these conditions is essential.
              </p>
              <label>💡 Risk Factors:</label>
              <p>
              Factors that can harm lung health include smoking, exposure to air pollution, occupational hazards, and genetics. Avoiding tobacco and reducing exposure to pollutants can significantly reduce the risk of lung disease.
              </p>
              <label>💡Prevention: :</label>
              <p>
              Maintaining lung health involves lifestyle choices such as regular exercise, a balanced diet, and practicing good hygiene to reduce the risk of infections. Vaccinations like the flu shot can also help protect lung health.
              </p>
              <label>💡Early Detection: </label>
              <p>
              egular check-ups with a healthcare provider are essential to monitor lung health. Early detection of lung conditions allows for timely intervention and better outcomes.
              </p>
              {/* <label>💡for ST depression due to Excercise: </label>
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
  