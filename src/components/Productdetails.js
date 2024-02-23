import React from 'react';
import './Productlist.css';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

function Productdetails() {
    const location = useLocation();
    const clickpagedata = location.state;
    
    return (
         
         <div >
            <Navbar/>
           <div className="container-fluid m-0  ">
         
         <br/> <br/> <br/>
       <div className="row">
           <div className="col-md-6">
           <img className="productdetailsimg " src={clickpagedata.images[0]} alt="Product"  />
          
               {/* <img className="productdetailsimg " src={clickpagedata.images[1]} alt="Product" /> */}
               {/* <img className="productdetailsimg " src={clickpagedata.images[2]} alt="Product" /> */}
           </div>
           <div className="col-md-6 mt-3 mt-lg-0">
               <h2>{clickpagedata.title}</h2>
               <p>{clickpagedata.description}</p>
               <p>Discount Percentage: {clickpagedata.discountPercentage}</p>
               <p>Rating: {clickpagedata.rating}</p>
               <p>Brand: {clickpagedata.brand}</p>
               <button className="btn btn-primary">Order Now</button>
           </div>
       </div>
           
                
     
   </div>
         </div>
        
    );
}

export default Productdetails;
