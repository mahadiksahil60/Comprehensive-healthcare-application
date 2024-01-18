import React, { useState } from 'react';
import axios from 'axios';







function Skindisease() {

    const [file, setFile] = useState(null);
    const [predictions, setPredictions] = useState([]);
    const [percentage, setPercentage] = useState([]);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
      };


     
  const handleUpload = async () => {
    if (!file) {
      console.error('No file selected');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await axios.post('http://localhost:5000/skindisease', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
     
      const classlabels =['acne', 'carcinoma', 'eczema', 'keratosis', 'millia', 'rosacea'];
      const numericPredictions = response.data.predictions;

      if (Array.isArray(numericPredictions) && numericPredictions.length > 0) {
          const maxProbability = Math.max(...numericPredictions.slice(1));
          const indexofProbability = numericPredictions.indexOf(maxProbability);
           console.log(numericPredictions);
          console.log(indexofProbability);
          if(indexofProbability !== -1 && indexofProbability < classlabels.length){
            const probabilitylabels = classlabels[indexofProbability];
            console.log(probabilitylabels);
            setPredictions(probabilitylabels);
          }
          setPercentage(maxProbability*100);
          console.log('Max Probability:', maxProbability);
          // Handle other logic as needed
      } else {
          console.error('Invalid predictions format');
      }

    } catch (error) {
      console.error('Error:', error);
    }
  };





    return (
        <div>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload Image</button>
  
        {predictions !== null && (
          <div>
            <h2>Prediction:</h2>
            <p>{predictions }    {percentage}%</p>
          </div>
        )}
      </div>
      
    )
}

export default Skindisease
