import React from "react";
import { Route, Routes } from "react-router-dom";

import {IngredientList} from "../data/incredients.js"
import {SpicesList} from "../data/spices.js"

import "./style.css";

const Products = [IngredientList, SpicesList];

const PathNames = ["Ingredients", "Spices"];

export default function SideNav({ value }){
    return (
        <>
        <div className="nav-hold bg-gray-200 p-10 ">
          <div className="items">
            <Routes>
            {
              Products.map((e, index)=>{
                return (
                    <Route key={index} path={`/${PathNames[index]}`} element={
                        <div>
                              <div className="topic my-8 px-20 uppercase">{PathNames[index]}</div>
                              <div className="item-hold">
                              {
                                
                                  e.map((e)=>{
                                    return <li className="my-2 mr-5 px-3 py-1 bg-gray-100" key={e} onClick={()=>{value(e)}} >{e}</li>
                                  })
                              }
                              </div>
                        </div>
                    } />
                )
              })
            }
            </Routes>
          </div>
        </div>
        </>
    )
}