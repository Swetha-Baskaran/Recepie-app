import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";


export default function Items({ Ing, Spi, Increment, Decrement }){

    let [btn, SetBtn] = useState(true)

    let showbtn = (e) => {
        SetBtn(e)
    }

    let name = localStorage.getItem("name")

    return (
        
        <div className="box py-6 flex flex-col items-center">

                  <div className="flex justify-between">
                          {(btn === true) ? 
                                         <div className="flex justify-end" style={{"width" : "36.5rem"}}>
                                           <button className="bg-blue-500 capitalize text-white px-7 py-1 shadow-lg rounded">
                                             <Link to="/Steps/Spices" onClick={()=>{showbtn(false)}}>next</Link>    
                                           </button>
                                         </div> 
                                        :
                                        <div className="flex justify-between" style={{"width" : "36.5rem"}}>
                                          <button className="bg-blue-500 capitalize text-white px-7 py-1 shadow-lg rounded">
                                            <Link to="/Steps/Ingredients" onClick={()=>{showbtn(true)}}>back</Link>
                                          </button>  
                                           <button className="bg-blue-500 capitalize text-white px-7 py-1 shadow-lg rounded">
                                             <Link to="/RecepieList" >Finish</Link>
                                           </button>
                                        </div>              
                                        }
                  </div>

        <div className="name border-solid border-2 border-gray-600 p-4 uppercase mt-10 shadow-2xl my-5 flex flex-col text-4xl text-left pl-10" style={{"width" : "36.5rem"}}>{name}</div>
        
        <div className="border-solid border-2 border-gray-600 p-5 shadow-2xl" style={{"width" : "36.5rem"}}>
                    <div className="flex justify-between px-5 text-2xl my-5" style={{"width" : "33.5rem"}}>
                        {(btn === true) ? <div>Ingredients</div> : <div>Spices</div>}
                        <div>Quantity</div>
                    </div>
        <Routes>
          {
            ["Ingredients", "Spices"].map((ei, ind)=>{
               return (
                 <Route path={"/"+ei}
                   element={
                     ((ind === 0 ? Ing : Spi)).map((e, index)=>{
                     return (<>
                       
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