import React from "react";

import "./style.css";

let SpiceValue = localStorage.getItem("Spices").split(",")
let IngredientValue = localStorage.getItem("Ingredients").split(",")

export default function RecepieList (){
    return(
        <>
          <div className="p-5 py-0">
              <div>
                  <div className="text-2xl md:text-3xl bg-gray-300 p-5 my-4 uppercase text-center">Final Recepie - Spicy burger</div>
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
                                 <h2 className="p-3 my-2 text-2xl bg-yellow-200">{event.name}</h2>
                                 <ol className="p-3 my-3 bg-gray-100">
                                 {
                                     event.value.map((e, index)=>{
                                         return (
                                             <li key={index}>{e}</li>
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