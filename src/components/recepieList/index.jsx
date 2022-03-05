import React from "react";

import "./style.css";

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
                  <h2 className="p-3 my-2 text-2xl bg-yellow-200">Incredients</h2>
                  <ol className="p-3 my-3 bg-gray-100">
                      <li className="p-2 my-2 bg-white">bread</li>
                      <li className="p-2 my-2 bg-white">bread</li>
                      <li className="p-2 my-2 bg-white">bread</li>
                      <li className="p-2 my-2 bg-white">bread</li>
                      <li className="p-2 my-2 bg-white">bread</li>
                  </ol>
              </div>
              <div>
                  <h2 className="p-3 my-2 text-2xl bg-yellow-200">Spices</h2>
                  <ol className="p-3 my-3 bg-gray-100">
                      <li className="p-2 my-2 bg-white">pepper</li>
                      <li className="p-2 my-2 bg-white">pepper</li>
                      <li className="p-2 my-2 bg-white">pepper</li>
                      <li className="p-2 my-2 bg-white">pepper</li>
                      <li className="p-2 my-2 bg-white">pepper</li>
                  </ol>
              </div>
          </div>
        </>
    )
}