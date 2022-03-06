import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function RecepieList (){
    let name = localStorage.getItem("name")

    var options = {
        method: 'GET',
        url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI',
        params: {q: 'food', pageNumber: '1', pageSize: '20', autoCorrect: 'true'},
        headers: {
          'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
          'x-rapidapi-key': 'd47fb14bfbmsh8eae95f7f8f5e65p12d02ajsnb1e43a9a494a'
        }
      };


    let [imgs, SetImg] = useState("")

    let fun = async () => {
        await axios.request(options).then(function (response) {
            console.log(response.data.value[0].url);
            SetImg(response.data.value[0].url)
        }).catch(function (error) {
            console.error(error);
        });
    }
    
    fun()

// useEffect(()=>{
//     axios.request(options).then(function (response) {
//         console.log(response.data.value[0].url);
//         SetImg(response.data.value[0].url)
//     }).catch(function (error) {
//         console.error(error);
//     });
// }, [])


    let SpiceValue = JSON.parse(localStorage.getItem("Spices"))
    let IngredientValue = JSON.parse(localStorage.getItem("Ingredients"))
    

    return(
        <>
          <div className="list mx-9 py-0">
              <div>
                  <div className="text-2xl md:text-3xl bg-gray-300 p-5 my-4 uppercase text-center flex justify-between">
                     <div >Final Recepie - {name}</div>
                     <button className="bg-cyan-600 shadow-cyan-500/50 text-white rounded py-2 px-6 text-2xl" >
                        <Link to="/">back to home</Link>
                     </button>
                  </div>
                  <div className="bg-red-300 mb-4">
                    <img src={imgs} className="h-96 w-full" alt="" />
                  </div>
              </div>
              <div>
                  {
                      [{name: "Ingredients", value: IngredientValue}, {name: "Spices", value: SpiceValue}].map((event, index)=>{
                          return (
                              <>
                              <div key={event.name}>
                                    <div className="px-6 py-4 my-2 text-2xl bg-yellow-200 flex justify-between">
                                        <h2>{event.name} Used</h2>
                                        <h2>Quantity</h2>
                                    </div>

                                 <ol className="p-3 my-3 border-solid border-2 border-gray-300">
                                 {
                                     event.value.map((e, index)=>{
                                         return (
                                             <li key={index} className="flex justify-between px-9">
                                                <div className="p-3 text-2xl">{e.name}</div>    
                                                <div className="p-3 text-2xl">{e.count}</div>
                                             </li>
                                         )
                                     })
                                 }
                                 </ol>
                              </div>
                            </>
                          )
                      })
                  }
              </div>
          </div>
        </>
    )
}