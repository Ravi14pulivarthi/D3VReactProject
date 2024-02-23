// import React, {useEffect, useState} from 'react'
// // import { useNavigate } from 'react-router-dom'


// function Registerform() {
    
//       //  to store the register form values  we define states

//      const [email,setemail]=useState('') 
//      const [name,setname]=useState('')
//      const [pasword,setpasword]=useState('')
    
//     //  const nav=useNavigate()

//       //  this function  to store the values  in localstorage and to navgate to sigin form
//      function kumar(){
//     //   localStorage.setItem("email",email)
//     //   localStorage.setItem("name",name)
//     //   localStorage.setItem("pasword",pasword)
    
//         //   nav("/siginform")
//         fetch('https://dummyjson.com/users/add', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({
//             username:name,
//             email:email ,
//             password:pasword 
              
//               /* other user data */
//             })
//           })
//           .then(res => res.json())
//           .then(( result)=> console.log(result));
//      }
//   return (
//     <div style={{
//         backgroundImage:
//           "linear-gradient( rgba(0,0,0,0.3), rgba(0,0,0,2)),url('https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg')",
//         height: "100vh", backgroundRepeat:"no-repeat",backgroundSize:"cover ",position:"relative"}}>
       
//     <center><h1 style={{color:"white" ,paddingTop:"50px", fontFamily:"cursive"}} > Register<span style={{color:"red"}}>form</span></h1></center>
//              <div className='container w-25  p-5 bg-dark text-white my-5 position-absolute  top-50 start-50 translate-middle  '>
           
//              <form  >
//   <div className="mb-3 ">
//     <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
     
//    {/*onChange  is used to capture what we type in inputbox */}
   
//     <input onChange={(e)=>{console.log(e.target.value);  setemail(e.target.value)}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
//   </div>
//   <div className="mb-3 ">
//     <label htmlFor="exampleInputEmail1" className="form-label">User Name</label>
//     <input onChange={(e)=>{setname(e.target.value)}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
//   </div>
//   <div className="mb-3">
//     <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//     <input onChange={(e)=>{setpasword(e.target.value)}} type="text" className="form-control" id="exampleInputPassword1"/>
//   </div>
  
//   <button onClick={kumar} type="button" className="btn btn-primary">Submit</button>
// </form>


//              </div>
         
//         </div>
  
//   )
// }

// export default Registerform


// ***************************


import React, {useEffect, useState} from 'react'
// import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Registerform() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
   const[empty,setempty]=useState(false)
  const nav = useNavigate();

  function registerUser() {
    // fetch('https://dummyjson.com/users/add', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     username: name,
    //     email: email,
    //     password: password,
    //   })
    // })
    //   .then(res => res.json())
    //   .then((result) =>  console.log(result));
    localStorage.setItem("email",email)
    localStorage.setItem("name",name)
      localStorage.setItem("password",password)
      if(email===""|| name === "" || password === "" ){
          setempty(true)  
      }
       else{
        nav("/Loginform")
       }
        
  }

  return (
     <div style={{
      backgroundImage: "url('https://images.spiceworks.com/wp-content/uploads/2023/04/11063816/E-commerce-Platform.jpg')",
      height: "730px",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"}}>

       {empty && (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong> Please fill the Details</strong>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
    <div className='container-fluid'>
      <center><h1 style={{ color: "white", paddingTop: "50px",  fontFamily: "Roboto" }}> Register<span style={{ color: "red" }}>form</span></h1></center>
      <div className='container p-10 bg-dark text-white my-5' id >
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputUsername" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputUsername"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary d-block w-50"
            onClick={registerUser}>
              Register
          </button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Registerform;
