import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

export default function Home(){
    return (
        <>
           <div className="flex p-6 justify-center items-start">
               <div className="px-6 mx-8 py-5">
                   <div className="text-4xl">Saved Recepies</div>
                   <ol>
                       <li className="py-2 px-10 m-3 shadow-lg">cake recepie</li>
                       <li className="py-2 px-10 m-3 shadow-lg">cake recepie</li>
                       <li className="py-2 px-10 m-3 shadow-lg">cake recepie</li>
                       <li className="py-2 px-10 m-3 shadow-lg">cake recepie</li>
                       <li className="py-2 px-10 m-3 shadow-lg">cake recepie</li>
                   </ol>
               </div>
               <div>
                   <button className="bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white p-2 m-5 rounded">
                     <Link to="/Steps/Ingredients">create new +</Link>    
                   </button>
               </div>
           </div>
        </>
    )
}