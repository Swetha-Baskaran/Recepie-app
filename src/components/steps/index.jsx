import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SideNav from "../sideNav";


import {IngredientList} from "../data/incredients.js"
import Items from "./items";

function getOccurrence(myArray, value) {
  var count = 0;
  myArray.forEach((val) => (val.name === value && count++));
  return count;
}

export default function StepsHold({ value, name }){

  let I = JSON.parse(localStorage.getItem("Ingredients"));
  let S = JSON.parse(localStorage.getItem("Spices"));

  let [Ing, AddIng] = useState((I) ? I : [])
  let [Spi, AddSpi] = useState((S) ? S : [])
  
  let addItem = (event) => {
      if(IngredientList.includes(event)){
          
        if(getOccurrence(Ing, event) !== 0){
          Ing.map((e)=>{
            if(e.name === event){
               e.count += 1
               AddIng([...Ing])
            }
            return ""
         })
        }
        else{
          AddIng([...Ing, {name: event, count: 1}])
        }

      }
      else{
          
        if(getOccurrence(Spi, event) !== 0){
          Spi.map((e)=>{
            if(e.name === event){
               e.count += 1
               AddSpi([...Spi])
            }
            return ""
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
    localStorage.setItem("Ingredients", JSON.stringify(Ing))
  }, [Ing])

  useEffect(()=>{
    localStorage.setItem("Spices", JSON.stringify(Spi))
  }, [Spi])

    return(
        <>
          <div className="block sm:flex">
              <SideNav value={addItem} />

              <div className="getValues p-6 grow">

                  <div className="text-teal-700 my-5">Recepie Book</div>
                  <div className="flex justify-between">
                          <button className="bg-blue-500 capitalize text-white px-7 py-1 shadow-lg rounded">
                             <Link to="/Steps/Ingredients">back</Link>    
                          </button>
                          <button className="bg-blue-500 capitalize text-white px-7 py-1 shadow-lg rounded">
                             <Link to="/Steps/Spices">next</Link>
                          </button> 
                  </div>

               <Items Ing={Ing} Spi={Spi} Increment={Increment} Decrement={Decrement} name={name} />

             </div>
          </div>
        </>
    )
}