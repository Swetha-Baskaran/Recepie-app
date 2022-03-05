import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

import img from "../../assets/chef.png"

export default function Home({ value }){
    return (
        <>
         <div className="p-6 mt-8">
            <div className="uppercase text-center text-4xl mb-5">Cook Ur Recepie</div>
         </div>

           <div className="block lg:flex lg:justify-center items-center text-center">
              <div className="mx-4 px-5 flex justify-center"><img src={img} alt="chef" /></div>
              <div className="p-9">
                  <p className="text-left">“Cooking is not difficult. Everyone has taste, even if they don’t realize it. Even if you’re not a great chef, there’s nothing to stop you understanding the difference between what tastes good and what doesn’t.”</p>
                  <br />
                  <div><p className="text-right mr-6">– Gerard Depardieu</p></div>
                   <div className="flex items-center my-6">
                      <div><input type="text" placeholder="Name of Recepie" className="shadow-lg p-3"/></div>
                      <button className="btn bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white p-3 m-5 rounded text-center" onClick={(event)=>{value(event.target.previousSibling.childNodes[0].value)}}>
                        <Link to="/Steps/Ingredients">create +</Link>    
                      </button>
                   </div>
              </div>
           </div>
        </>
    )
}