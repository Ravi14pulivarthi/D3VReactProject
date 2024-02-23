import React from 'react'
import { useNavigate,Link } from 'react-router-dom'


function Navbar() {
  
   let homenav=useNavigate()
   function navclick(){
    homenav("/")
   }
  return (
    <div>
         <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark p-3 bg-gradient ">
  <div class="container-fluid ">
    <a class="navbar-brand" >  <i class="fa-solid fa-cart-shopping"></i>  EazyShop</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0" >
      <Link className="nav-link active" aria-current="page" to={"/Productlist"}>
                  Home
                </Link>
        
        
      </ul>
      <form class="d-flex" role="search">
       
        <button class="btn btn-outline-success" type="submit" onClick={navclick}>Logout</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar