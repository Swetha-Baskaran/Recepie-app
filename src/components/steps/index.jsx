import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import SideNav from "../sideNav";

import "./style.css"

import {IngredientList} from "../data/incredients.js"

function getOccurrence(myArray, value) {
  var count = 0;
  myArray .forEach((val) => (val.name === value && count++));
  return count;
}

export default function StepsHold({ value }){

  // localStorage.setItem("Ingredients", "")
  // localStorage.setItem("Spices", "")

  let [Ing, AddIng] = useState([])
  let [Spi, AddSpi] = useState([])
  
  let addItem = (event) => {
      if(IngredientList.includes(event)){
          
        if(getOccurrence(Ing, event) !== 0){
          Ing.map((e)=>{
            if(e.name === event){
               e.count += 1
               AddIng([...Ing])
            }
         })
        }
        else{
          AddIng([...Ing, {name: event, count: 1}])
        }
//  console.log([...JSON.parse(localStorage.getItem("Ingredients"))])
            

      }
      else{
          
        if(getOccurrence(Spi, event) !== 0){
          Spi.map((e)=>{
            if(e.name === event){
               e.count += 1
               AddSpi([...Spi])
            }
         })
        }
        else{
          AddSpi([...Spi, {name: event, count: 1}])
        }

      }
  }
  
  let Increment = (e, step) => {
      if(step === 0){
        Ing[e].count++
        AddIng([...Ing])
      }
      else{
        Spi[e].count++
        AddSpi([...Spi])
      }
  }

  let Decrement = (e, step) => {
    if(step === 0){
      (Ing[e].count > 1) ? Ing[e].count-- : Ing.splice(e, 1) 
      AddIng([...Ing])
    }
    else{
      (Spi[e].count > 1) ? Spi[e].count-- : Spi.splice(e, 1) 
      AddSpi([...Spi])
    }
  }


  useEffect(()=>{
    localStorage.removeItem("Ingredients")
    localStorage.setItem("Ingredients", JSON.stringify(Ing))
  }, [Ing])

  useEffect(()=>{
    localStorage.removeItem("Spices")
    localStorage.setItem("Spices", JSON.stringify(Spi))
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
                        ["Ingredients", "Spices"].map((e, ind)=>{
                           return (
                             <Route path={"/"+e}
                               element={
                                 ((ind === 0 ? Ing : Spi)).map((e, index)=>{
                                 return (
                                   <div className="element flex" key={index}>
                                     <div className="name m-2 w-96 px-5 py-1 bg-yellow-100">{e.name}</div>  
                                     <div className="plus m-2 p-1 px-3 bg-green-100" onClick={()=>{Increment(index, ind)}} >+</div>
                                     <div className="count m-2 p-1 px-3 bg-gray-100">{e.count}</div>
                                     <div className="minus m-2 p-1 px-3 bg-red-100" onClick={()=>{Decrement(index, ind)}} >-</div>
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