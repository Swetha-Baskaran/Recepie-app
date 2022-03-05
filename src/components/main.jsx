import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./home";
import RecepieList from "./recepieList";
import StepsHold from "./steps";


export default function Main(){
    return (
        <>
             <Routes>
               <Route exact path="/" element={<Home />} />
               <Route exact path="/Steps/*" element={<StepsHold value={0} />} />
               <Route exact path="/Steps/*" element={<StepsHold value={1} />} />
               <Route exact path="/RecepieList" element={<RecepieList />}/>
             </Routes>
  
        </>
    )
}