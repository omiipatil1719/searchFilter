// import { React, useState } from 'react'
// import data from "./ListData.json"

// function List(props) {
//     //create a new array by filtering the original array
//     const filteredData = data.filter((el) => {
//         //if no input the return the original
//         if (props.input === '') {
//             return el;
//         }
//         //return the item which contains the user input
//         else {
//             return el.text.toLowerCase().includes(props.input)
//         }
//     })
//     return (
//         <ul>
//             {filteredData.map((item) => (
//                 <li key={item.id}>{item.text}</li>
//             ))}
//         </ul>
//     )
// }

// export default List

//..........................search filter with Api Data.................................

import React, { useEffect, useState } from 'react'
import axios from "axios"
const List = (props) => {

    const [username, setUsername]=useState()

    useEffect(()=>{
       
            axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((resp)=>{
                setUsername(resp.data) // eith fkt resp.data taka (data.title,data.id) takl tr error yeil
            })
        
    },[])
    const filteredData = username?.filter((el) => {
        if (props.input == "") {
            return el;
        }
        else {
            return (
                el.title.toLowerCase().includes(props.input) //he title data madhl title ahe
            )
        }
    })
 
    return (
        <>
            {
                filteredData?.map((item) => {
                    return (
                    <>
                    <p key={item.id}>{item.title}</p>
                    </>
                    )
                })

            }


        </>)
}

export default List