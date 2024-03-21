import './index.css'
import { tutorial } from './tutorial.js';
import React, { useState } from 'react';
import axios from 'axios';
import homepage from './homepage.jpg';
import { Link } from "react-router-dom";
import { Popupreport } from './popupreport.js';






function Skindisease() {
  const [isClicked, setIsClicked] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [file, setFile] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [percentage, setPercentage] = useState([]);
  const [name, setName] = useState("");
  const [showPopup, setShowPopup] = useState(false)
  const handleFileChange = (e) => {
    const newfile = e.target.files[0]
    setFile(e.target.files[0]);
    if (newfile) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result); // Set the data URL as the selectedImage state
      };
      reader.readAsDataURL(newfile); // Read the file as a data URL
    }
  };
  const handleformdata = (e) => {
    setName(e.target.value)
  }


  const handleUpload = async () => {
    if (!file) {
      console.error('No file selected');
      return;
    }

    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 200);
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await axios.post('http://localhost:5000/skindisease', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const classlabels = ['Actinic keratosis', 'Basal cell carcinoma', 'Benign keratosis', 'Dermatofibroma', 'Melanocytic nevus', 'Melanoma', 'Squamous cell carcinoma', 'Vascular lesion'];
      const numericPredictions = response.data.predictions;
      console.log(response)

      if (Array.isArray(numericPredictions) && numericPredictions.length > 0) {
        const maxProbability = Math.max(...numericPredictions.slice(1));
        const indexofProbability = numericPredictions.indexOf(maxProbability);
        //  console.log(numericPredictions); 
        // console.log(indexofProbability);
        if (indexofProbability !== -1 && indexofProbability < classlabels.length) {
          const probabilitylabels = classlabels[indexofProbability];
          // console.log(probabilitylabels);
          setPredictions(probabilitylabels);
        }
        setPercentage(maxProbability * 100);
        console.log('Max Probability:', maxProbability);
        setShowPopup(true);

        // Handle other logic as needed
      } else {
        console.error('Invalid predictions format');
      }

    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);

  }


  return (
    <div className=' flex flex-col justify-center w-full  bg-cover border-red h-screen '>
      <div className=' rounded-2xl  text-white h-3/4 mt-26 border-r-8 border-b-8 border-slate-900   mx-20   flex'>
       {selectedImage ? (
           <div className="relative">
           <img className="w-full h-full rounded-2xl object-cover" src={selectedImage} alt="Selected" />
           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-transparent to-lime-400 opacity-0 animate-scanner" />
         </div>
       ):( <img className="w-1/2 h-full rounded-2xl object-cover" src={homepage} alt='check your internet connection' />
       )}
        <div className='w-1/2 flex flex-col rounded-2xl justify-center items-center bg-gradient-to-l from-slate-500 to-slate-900 py-2'>
          <h1 className='mb-2 text-3xl bg-gradient-to-r from-slate-400 to-blue-500 text-slate-800 p-4 rounded-xl font-extrabold shadow-lg'>
            Skin Disease Detection
          </h1>
          <p className='text-base p-8'>Our skin disease detection tool is designed to assist users in identifying potential skin conditions based on provided images. However, it should not be used as a substitute for professional medical diagnosis or treatment. The model used behind this tool provides a accuracy upto 99.52%</p>

          <input
            type='text'
            onChange={handleformdata}
            placeholder='Enter your Name'
            className='border border-gray-300 py-2 px-4  text-black rounded-md transition duration-300 ease-in-out hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
          />
          <input
            className="appearance-none border border-blue-500 rounded-md py-2 px-4 bg-blue-100 text-blue-500 hover:bg-blue-200 hover:text-blue-600 cursor-pointer"
            type="file"
            onChange={handleFileChange}
          />
         <button
      className={`relative bg-gradient-to-r from-slate-500 to-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transform hover:scale-105 active:scale-95 ${
        isClicked ? 'darken' : ''
      }`}
      onClick={handleUpload}
    >
      Detect
      <span className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-25"></span>
    </button>
                   {showPopup && <Popupreport predictions={predictions} percentage={percentage} name={name} onClose={handleClosePopup} />}
          <Link className="font-serif  font-extralight text-slate-200 hover:text-blue-900 underline  underline-offset-4 p-4" to="/tutorial">To know how to use this tool</Link>
        </div>

      </div>
    </div>




  )
}

export default Skindisease
