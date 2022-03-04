import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./home";
import RecepieList from "./recepieList";
import StepsHold from "./steps";


export default function Main(){
    return (
        <>
          <div>React Recepie App</div>

          <Routes>
            <Route to="/" element={<Home />} />
            <Route to="/" element={<StepsHold />} />
            <Route to="/" element={<RecepieList />}/>
          </Routes>

        </>
    )
}