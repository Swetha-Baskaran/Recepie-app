import React from "react";

import "./style.css";

export default function RecepieList (){
    return(
        <>
          <div>
              <div>
                  <div>Spicy burger</div>
                  <img src="/" alt="final image of the recepie created" />
              </div>
              <div>
                  <h2>Incredients</h2>
                  <ol>
                      <li>bread</li>
                      <li>bread</li>
                      <li>bread</li>
                      <li>bread</li>
                      <li>bread</li>
                  </ol>
              </div>
              <div>
                  <h2>Spices</h2>
                  <ol>
                      <li>pepper</li>
                      <li>pepper</li>
                      <li>pepper</li>
                      <li>pepper</li>
                      <li>pepper</li>
                  </ol>
              </div>
          </div>
        </>
    )
}