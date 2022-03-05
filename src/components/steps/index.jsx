import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import SideNav from "../sideNav";

import "./style.css"

import {IngredientList} from "../data/incredients.js"
import {SpicesList} from "../data/spices.js"

export default function StepsHold({ value }){

  let [Ing, AddIng] = useState([])
  let [Spi, AddSpi] = useState([])
  
  let addItem = (e) => {
      if(IngredientList.includes(e)){
          AddIng([...Ing, e])
      }
      else{
          AddSpi([...Spi, e])
      }
  }
  

  useEffect(()=>{
    localStorage.removeItem("Ingredients")
    localStorage.setItem("Ingredients", Ing)
  }, [Ing])

  useEffect(()=>{
    localStorage.removeItem("Spices")
    localStorage.setItem("Spices", Spi)
  }, [Spi])

    return(
        <>
          <div className="block sm:flex">
              {/* ingredients or spices list */}
             <div className="nav-hold bg-gray-200 p-10 ">
               <SideNav value={addItem} />
             </div>

             <div className="getValues p-6 grow">
               <div className="flex justify-items-stretch">
                 {/* buttons */}
                 {
                   (value === 0) ?
                       <button className="justify-self-end">
                          <Link to="/Steps/Spices">next</Link>  
                       </button> 
                       : 
                       <button className="justify-self-end">
                          <Link to="/Steps/Ingredients">back</Link>    
                       </button>
                 }
               </div>

               <div className="bg-gray-300 p-3 shadow-2xl my-5">Recepie Name</div>

               <div className="box py-6 flex flex-col items-center">
                    {/* items must be added here */}
                    <Routes>
                      {
                        ["Ingredients", "Spices"].map((e, index)=>{
                           return (
                             <Route path={"/"+e}
                               element={
                                 ((index === 0 ? Ing : Spi)).map((e, index)=>{
                                 return (
                                   <div className="element flex" key={index}>
                                     <div className="name m-2 w-96 px-5 py-1 bg-yellow-100">{e}</div>  
                                     <div className="plus m-2 p-1 px-3 bg-green-100">+</div>
                                     <div className="count m-2 p-1 px-3 bg-gray-100">1</div>
                                     <div className="minus m-2 p-1 px-3 bg-red-100">-</div>
                                 </div>
                                 )
                                })
                              }
                             />
                           )
                        })
                      }
                    </Routes>
               </div>
                

             </div>
          </div>
        </>
    )
}