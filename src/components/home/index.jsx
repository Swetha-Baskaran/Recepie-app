import React from "react";
import { Link } from "react-router-dom";

import img from "../../assets/chef.png"

import "./style.css"

export default function Home(){
    return (
        <>
         <div className="p-6 mt-14">
            <div className="uppercase text-center text-5xl mb-5">Cook Ur Recepie</div>
         </div>

           <div className="block lg:flex lg:justify-evenly items-center text-center">
              <div className="px-5 flex justify-center"><img src={img} alt="chef" /></div>
              
              <div className="p-9 mt-6">
                  <p className="testii text-left">“Cooking is not difficult. Everyone has taste, even if they don’t realize it. Even if you’re not a great chef, there’s nothing to stop you understanding the difference between what tastes good and what doesn’t.”</p>
                  <br />
                  <div><p className="text-right mr-6 text-3xl">– Gerard Depardieu</p></div>
                   <div className="block sm:flex sm:items-center my-6">
                      <div><input type="text" placeholder="Name of Recepie" className="bg-gray-100 shadow-lg p-3" style={{"width" : "20rem"}}/></div>
                      <div>
                         <button className="btn bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white p-3 m-5 rounded text-center" onClick={(event)=>{
                            localStorage.clear()
                            event.target.style.background = "teal"
                            localStorage.setItem("name", event.target.parentElement.parentElement.firstChild.firstChild.value)
                            }}>
                             set Name
                         </button>
                         <Link className="bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white p-3 m-5 ml-0 rounded text-center"  to="/Steps/Ingredients">create +</Link>  
                      </div>
                   </div>
              </div>
           </div>
        </>
    )
}