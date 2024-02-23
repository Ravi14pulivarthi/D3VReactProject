import React from "react";
import { useNavigate } from "react-router-dom";

function Fristpage () {
      const navepage=useNavigate()
     function navregestier(){
            navepage("/Visetpage")
     }
      function clickreg(){
        navepage("/Loginform")
      }
  return (
    <div  style={{
        backgroundImage: "url('https://media.istockphoto.com/id/1308192404/photo/growth-graph-and-arrows-ladder-career-path-for-business-growth-success-process-concept.jpg?s=612x612&w=0&k=20&c=u3R8Fjjalg9wu5aW5ohJInKrS85Djfod6jXpyMcN3N8=')",
        height: "730px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
         backgroundPosition:"center",
        padding: "20px",}}>
   
      <div className="ravi">
        
        <div style={{position: "relative"}}>
          <h1  style={{fontSize: "4vw",  fontFamily: "Roboto", paddingLeft: "5vw", paddingTop: "10vh"}}>
          <i class="fa-solid fa-cart-shopping"></i>  EazyShop
          </h1>
          <button onClick={clickreg} style={{position:  "absolute", fontFamily: "Roboto", left: "80%", top: "10vh", width: "8vw", height: "9vh", border: "none", borderRadius: "5px", backgroundColor: "black", color: "white", fontSize: "2vw"}}>
            Log-in
          </button>
        </div>
    
        <br/><br/><br/><br/><br/><br/><br/>

        <center>
          <h1 style={{fontSize: "4vw", fontFamily: "Roboto"}}>
            The big billion days Ready to buy here from <br />₹ 149.
          </h1>
          <br/>
          <button onClick={navregestier} style={{border: "none", borderRadius: "5px", backgroundColor: "black", color: "white",fontFamily:"Roboto", fontSize: "2vw", height: "8vh", width: "15vw"}}>
            Join with us
          </button>
        </center>
      </div>
     </div>
  );
}

export default Fristpage;
