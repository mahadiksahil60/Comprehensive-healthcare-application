import React from "react";

export const Popupreport = ({predictions,percentage,name, onClose}) => {
  return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white text-black p-8 rounded-lg">
        <h1 className="text-4xl m-5 font-extrabold font-serif">Skin Disease Classification Report </h1>
        
        
        {predictions === 'Melanoma' ? (<div className="p-2">
          <h1 className="text-2xl m-5 font-bold text-red-500">Cancerous ! Contact a medical professional as soon as possible! </h1>
        <p className="p-2 text-lg font-medium">Name: {name}</p>
        <p className="text-red-700 p-2 font-bold text-xl">Identified Disease : {predictions} </p>
        <p className="text-red-700 p-2 font-bold text-xl">Classification accuracy : {Math.floor(percentage)}% </p> 
          <div className="p-2 font-sans font-semibold"> Causes : 
Melanoma, a type of skin cancer, typically develops when unrepaired DNA damage to skin cells (most often caused by ultraviolet radiation from sunshine or tanning beds) triggers mutations or genetic defects that lead the skin cells to multiply rapidly and form malignant tumors. Other factors such as family history, weakened immune system, and exposure to certain chemicals can also contribute to melanoma development</div>
         
          <p className="p-2 font-sans font-semibold">Action : After detecting melanoma, it's important to consult a healthcare professional for further evaluation and treatment. Early detection greatly improves treatment outcomes. Remember to continue practicing sun safety measures to reduce the risk of skin cancer.</p>
         <a className="p-2 underline text-blue-600" href="https://www.healthline.com/health/skin-cancer/melanoma">To Learn more about Melanoma</a>
          </div>
        ):(" ")}
        <button onClick={onClose} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">Close</button>
      </div>
    </div>    );
}
