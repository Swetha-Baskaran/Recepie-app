import React from "react";

import "./style.css";

let SpiceValue = JSON.parse(localStorage.getItem("Spices"))
let IngredientValue = JSON.parse(localStorage.getItem("Ingredients"))

 let Save = () => {
     
 }

export default function RecepieList (){
    return(
        <>
          <div className="p-5 py-0">
              <div>
                  <div className="text-2xl md:text-3xl bg-gray-300 p-5 my-4 uppercase text-center flex justify-between">
                     <div >Final Recepie - Spicy burger</div>
                     <button className="bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white rounded-full py-2 px-6" onClick={()=>{Save()}}>Save</button>
                  </div>
                  <div className="bg-red-300 h-96 mb-4">
                    <img src="/" alt="final image of the recepie created" />
                  </div>
              </div>
              <div>
                  {
                      [{name: "Ingredients", value: IngredientValue}, {name: "Spices", value: SpiceValue}].map((event, index)=>{
                          return (
                              <>
                              <div key={event.name}>
                                    <div className="p-3 my-2 text-2xl bg-yellow-200 flex justify-between">
                                        <h2>{event.name} Used</h2>
                                        <h2>Quantity</h2>
                                    </div>

                                 <ol className="p-3 my-3 bg-gray-100">
                                 {
                                     event.value.map((e, index)=>{
                                         return (
                                             <li key={index} className="flex justify-between">
                                                <div>{e.name}</div>    
                                                <div>{e.count}</div>
                                             </li>
                                         )
                                     })
                                 }
                                 </ol>
                              </div>
                            </>
                          )
                      })
                  }
              </div>
          </div>
        </>
    )
}