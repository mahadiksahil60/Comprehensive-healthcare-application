import React from "react";
import sample from "./ISIC_0000313.jpg"

export default function tutorial  () {
        return (
            <div className=" m-5 ">
               <div className=" text-white font-extrabold   rounded-2xl p-2 font-serif flex justify-center bg-gradient-to-r from-blue-900 to-slate-900 text-3xl items-center"><p className="text-center">INSTRUCTIONS FOR USING OUR SKIN DISEASE DETECTION TOOL</p></div>
<div className=" mt-3 bg-gradient-to-l from-slate-500 to-slate-900  text-white  text-xl font-semibold  px-5 py-2 flex flex-col items-center"> <p className="p-3">Instruction 1 : The image uploaded should be of good quality taken under appropriate lighting conditions <br/> Instruction 2 : The image should be coloured i.e RGB, Monochrome images would lead to highly inaccurate results.<br/>This is a sample image for reference➡️</p><br/>
<img className=" bg-white w-60 h-60 p-1 mx-3 border-4 border-black border-double rounded-lg "  src={sample} alt="Sample not loading .. check your internet connection"/> 
<p className="p-3">If your image meets these conditions, it is suitable for uploading to the model to obtain output</p>

  </div>                 
            <div className=" bg-slate-900 text-gray-400 p-5 ">Note: This model employs advanced deep learning techniques to assess and categorize skin diseases with an accuracy rate of 99.52%. However, it is imperative to emphasize that this tool cannot serve as a replacement for professional medical intervention. Instead, it should be regarded as an initial step in diagnosing skin conditions, akin to a first-aid measure. Seeking expert medical advice and treatment remains indispensable for accurate diagnosis and appropriate management</div>
            </div>
        );
}