import { useState } from "react";
// import reactRouterDom from "react-router-dom";
import { Link } from "react-router-dom";
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <nav className=" bg-black p-4" >
        <div className="container mx-auto flex items-center justify-between" >
        <div className="text-white text-xl font-bold">Health Detector</div>
          
          <ul className={` hidden sm:flex sm:space-x-4 md:flex md:space-x-4 lg:flex lg:space-x-4 ${isOpen?'hidden' : ''}`} >
             <li className = "text-white pr-3 pl-3 rounded-md  hover:text-slate-600 hover:font-bold  hover:bg-blue-300 active:bg-white focus:bg-red-300">
              <Link to="/">🏠</Link>
            </li>
            <li className = "text-white pr-3 pl-3 rounded-md  hover:text-slate-600 hover:font-bold  hover:bg-blue-300 active:bg-white focus:bg-red-300">
              <Link to="/lungs">🫁Lung Health</Link>
            </li>
           
            <li className = "text-white pr-3 pl-3 rounded-md  hover:text-slate-600 hover:font-bold  hover:bg-blue-300 active:bg-white focus:bg-red-300">
              <Link to="/heart-disease">💗Heart Health</Link>
            </li>
            <li className = "text-white pr-3 pl-3 rounded-md hover:text-slate-600 hover:font-bold  hover:bg-blue-300 active:bg-white focus:bg-red-300">
              <Link to="/skindisease">💊Skin Disease Detection</Link>
            </li>

          </ul>
          <div className="lg:hidden">
          <button onClick={toggleNavbar} className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
     
         </div>
        </nav>
        
    );
  }