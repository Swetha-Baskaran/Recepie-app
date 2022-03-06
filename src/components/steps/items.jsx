import React from "react";
import { Route, Routes } from "react-router-dom";


export default function Items({ Ing, Spi, Increment, Decrement, name }){
    return (
        
        <div className="box py-6 flex flex-col items-center">
        <div className="name border-solid border-2 border-gray-600 p-3 shadow-2xl my-5 flex flex-col items-center" style={{"width" : "36.5rem"}}>{name}</div>
        
        <div className="border-solid border-2 border-gray-600 p-5">
        <Routes>
          {
            ["Ingredients", "Spices"].map((ei, ind)=>{
               return (
                 <Route path={"/"+ei}
                   element={
                     ((ind === 0 ? Ing : Spi)).map((e, index)=>{
                     return (<>
                       {
                         (index === 0) ?
                            <div className="flex justify-between px-5 text-2xl my-5" style={{"width" : "33.5rem"}}>
                               <div>{ei}</div>
                               <div>Quantity</div>
                            </div>
                            :
                            ""
                       }

                       <div className="element flex justify-between items-center" style={{"width" : "33.5rem"}} key={index}>
                         <div className="name m-2 max-w-96 px-5 py-1 bg-yellow-100">{e.name}</div>  
                         <dir className="flex">
                             <div className="plus m-2 p-1 px-3 bg-green-100" onClick={()=>{Increment(index, ind)}} >+</div>
                             <div className="count m-2 p-1 px-3 bg-gray-100">{e.count}</div>
                             <div className="minus m-2 p-1 px-3 bg-red-100" onClick={()=>{Decrement(index, ind)}} >-</div>
                         </dir>
                      </div>
                      {
                        ((ind === 0 && (index === Ing.length-1)) || (ind === 1 && (index === Spi.length-1))) ? <div></div> : <hr className="bg-gray-900"/>
                        // ((ind === 0 && (index === Ing.length-1)) || (ind === 1 && (index === Spi.length-1))) ?
                      }
                     </>)
                    })
                  }
                 />
               )
            })
          }
        </Routes>
        </div>
   </div>
  
    )
}