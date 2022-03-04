import React from "react";
import { Route, Routes } from "react-router-dom";
import SideNav from "../sideNav";
import Ingredients from "./ingredients";
import Spices from "./spices";

export default function StepsHold(){
    return(
        <>
          <div className="block lg:flex">
             <div className="bg-gray-200">
               <SideNav />
             </div>
             <div>
                <Routes>
                  <Route to="/Step1" element={<Ingredients />}></Route>
                  <Route to="/Step2" element={<Spices />}></Route>
                </Routes>
             </div>
          </div>
        </>
    )
}