import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./home";
import RecepieList from "./recepieList";
import StepsHold from "./steps";

export default function Main(){
 
    let [name, SetName] = useState("")

    let GiveName = (e) =>{
         SetName(e)
         console.log(e)
    }

    return (
        <>
             <Routes>
               <Route exact path="/" element={<Home value={GiveName} />} />
               <Route exact path="/Steps/*" element={<StepsHold value={0} name={name} />} />
               <Route exact path="/Steps/*" element={<StepsHold value={1} name={name} />} />
               <Route exact path="/RecepieList" element={<RecepieList />}/>
             </Routes>
  
        </>
    )
}