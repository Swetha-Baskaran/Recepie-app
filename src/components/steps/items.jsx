import React from "react";
import { Route, Routes } from "react-router-dom";


export default function Items({ Ing, Spi, Increment, Decrement }){
    return (
        <div className="box py-6 flex flex-col items-center">
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
    )
}