import React ,{useState } from "react"


const Main2fun=()=>{
   
    fetch("https://dummyjson.com/auth/me", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {response.json();localStorage.setItem('status',response.status)})
      .then((result) => localStorage.setItem("data",result));
      
       
    
   }


export default Main2fun