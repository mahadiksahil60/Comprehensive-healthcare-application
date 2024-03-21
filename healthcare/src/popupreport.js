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


{predictions === 'Actinic keratosis' ? (<div className="p-2">
          <h1 className="text-2xl m-5 font-bold text-orange-300">Pre-Cancerous ! Contact a medical professional as soon as possible! </h1>
        <p className="p-2 text-lg font-medium">Name: {name}</p>
        <p className="text-orange-300 p-2 font-bold text-xl">Identified Disease : {predictions} </p>
        <p className="text-orange-300 p-2 font-bold text-xl">Classification accuracy : {Math.floor(percentage)}% </p> 
          <div className="p-2 font-sans font-semibold"> Causes : 
          Actinic keratosis (AK) is a common precancerous skin condition primarily caused by chronic exposure to ultraviolet (UV) radiation from the sun or artificial sources such as tanning beds.<br/>
AK typically appears as rough, scaly patches on sun-exposed areas of the skin, such as the face, scalp, ears, neck, backs of hands, and forearms.<br/>
Risk factors for developing AK include fair skin, advanced age, cumulative sun exposure, history of sunburns, and immunosuppression.<br/>
While AK lesions are usually benign, they have the potential to progress into squamous cell carcinoma (SCC), a type of skin cancer, if left untreated.<br/>
Treatment options for AK include topical therapies (e.g., 5-fluorouracil, imiquimod, diclofenac), cryotherapy, chemical peels, photodynamic therapy, and surgical interventions (e.g., curettage and electrodesiccation).
</div>
         
          <p className="p-2 font-sans font-semibold">Action : Follow the treatment plan prescribed by the dermatologist diligently, including applying topical medications as directed or attending scheduled procedures such as cryotherapy or photodynamic therapy.<br/>
Adopt strict sun protection measures, including wearing protective clothing (e.g., wide-brimmed hats, long-sleeved shirts), using broad-spectrum sunscreen with SPF 30 or higher, seeking shade during peak sun hours, and avoiding tanning beds.<br/>
Perform regular self-examinations of the skin to monitor for any changes or new lesions, and promptly report any concerns to the healthcare provider.</p>
         <a className="p-2 underline text-blue-600" href="https://www.healthline.com/health/skin-cancer/melanoma">To Learn more about Melanoma</a>
          </div>
        ):(" ")}



{predictions === 'Basal cell carcinoma' ? (<div className="p-2">
          <h1 className="text-2xl m-5 font-bold text-red-500">Cancerous ! Contact a medical professional as soon as possible! </h1>
        <p className="p-2 text-lg font-medium">Name: {name}</p>
        <p className="text-red-700 p-2 font-bold text-xl">Identified Disease : {predictions} </p>
        <p className="text-red-700 p-2 font-bold text-xl">Classification accuracy : {Math.floor(percentage)}% </p> 
          <div className="p-2 font-sans font-semibold"> Causes : Chronic exposure to ultraviolet (UV) radiation from the sun over many years is the primary cause of basal cell carcinoma.<br/>
Ignoring the formations of Actinic Keratosis lesion can lead to basal call carcinoma, a type of skin cancer although not as fatal as other type of skin cancers.<br/>
Other risk factors include a history of frequent sun exposure, indoor tanning, fair skin, light-colored eyes, a family history of skin cancer, exposure to arsenic, and a weakened immune system.</div>
         
          <p className="p-2 font-sans font-semibold">Action :
Follow the treatment plan prescribed by the dermatologist or oncologist diligently, which may include surgical removal, topical therapies, cryotherapy, photodynamic therapy, or radiation therapy.<br/>
Implement strict sun protection measures to prevent further sun damage and reduce the risk of developing additional skin cancers, including wearing protective clothing, using broad-spectrum sunscreen with SPF 30 or higher, seeking shade, and avoiding tanning beds.<br/>
Perform regular self-examinations of the skin to monitor for any changes or new lesions, and promptly report any concerns to the healthcare provider.</p>
         <a className="p-2 underline text-blue-600" href="https://www.healthline.com/health/skin-cancer/melanoma">To Learn more about Melanoma</a>
          </div>
        ):(" ")}







{predictions === 'Benign keratosis' ? (<div className="p-2">
          <h1 className="text-2xl m-5 font-bold text-green-500">Non-Cancerous ! Contact a medical professional as soon as possible! </h1>
        <p className="p-2 text-lg font-medium">Name: {name}</p>
        <p className="text-green-500 p-2 font-bold text-xl">Identified Disease : {predictions} </p>
        <p className="text-green-500 p-2 font-bold text-xl">Classification accuracy : {Math.floor(percentage)}% </p> 
          <div className="p-2 font-sans font-semibold"> Causes : 
Melanoma, a type of skin cancer, typically develops when unrepaired DNA damage to skin cells (most often caused by ultraviolet radiation from sunshine or tanning beds) triggers mutations or genetic defects that lead the skin cells to multiply rapidly and form malignant tumors. Other factors such as family history, weakened immune system, and exposure to certain chemicals can also contribute to melanoma development</div>
         
          <p className="p-2 font-sans font-semibold">Action : After detecting melanoma, it's important to consult a healthcare professional for further evaluation and treatment. Early detection greatly improves treatment outcomes. Remember to continue practicing sun safety measures to reduce the risk of skin cancer.</p>
         <a className="p-2 underline text-blue-600" href="https://www.healthline.com/health/skin-cancer/melanoma">To Learn more about Melanoma</a>
          </div>
        ):(" ")}







{predictions === 'Melanocytic nevus' ? (<div className="p-2">
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







{predictions === 'Squamous cell carcinoma' ? (<div className="p-2">
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







{predictions === 'Vascular lesion' ? (<div className="p-2">
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




{predictions === 'Dermatofibroma' ? (<div className="p-2">
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
