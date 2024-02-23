import React, { useEffect, useState } from "react";

import "./Productlist.css";
import { useNavigate } from "react-router-dom";
import Nav2 from "./Nav2";

function  Visetpage() {
  const nav = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState(null);
   const[alert,setalert]=useState(false)

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(3); // Number of products to display per page

  function click() {
   setalert(true)
  }

  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((result) => setdata(result.products));
  }, []);

  // Sorting function
  useEffect(() => {
    const sortedData = [...data];
    if (sortBy === "asc") {
      sortedData.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "desc") {
      sortedData.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortBy === "low") {
      sortedData.sort((a, b) => a.price - b.price);
    } else if (sortBy === "high") {
      sortedData.sort((a, b) => b.price - a.price);
    }
    setdata(sortedData);
  }, [sortBy]);

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = data
    .filter(
      (product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
    <Nav2/>
    {alert && (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          <strong> Please make sure you are Registered, if you already register then login.  </strong>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
      <div className="container-fluid my-5 d-flex justify-content-between">
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
            Sort by
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><button className="dropdown-item" onClick={() => setSortBy("asc")}>Name A to Z</button></li>
            <li><button className="dropdown-item" onClick={() => setSortBy("desc")}>Name Z to A</button></li>
            <li><button className="dropdown-item" onClick={() => setSortBy("low")}>Price Low to High</button></li>
            <li><button className="dropdown-item" onClick={() => setSortBy("high")}>Price High to Low</button></li>
          </ul>
        </div>
        <input
          type="text"
          placeholder="Search by name or description"
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{width:"20%"}}
        />
      </div>

      <div id="productlist" className="container-fluid my-5 d-flex justify-content-between">
        {currentProducts.map((values, index) => {
          return (
            <div className="container" key={index}>
              <img className="img1"  onClick={click} src={values.images[0]} alt="Product" />
              <br />
              <div className="content">
                <div className="text">
                  <div>{values.title}</div>
                  <div>
                    <i className="fa-solid fa-indian-rupee-sign"></i>
                    {values.price}
                  </div>
                  <div>
                    <i className="fa-solid fa-star"></i> {values.rating}
                  </div>
                </div>
                <div>
                  <button className="button" onClick={click}>
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

 <br/>  <br/>  <br/>  <br/>  <br/>  <br/> 
      {/* Pagination */}
      <nav>
        <ul className="pagination">
          {data.length > productsPerPage &&
            Array.from(
              { length: Math.ceil(data.length / productsPerPage) },
              (_, index) => (
                <li key={index} className="page-item">
                  <button
                    onClick={() => paginate(index + 1)}
                    className="page-link text-dark"
                    
                  >
                    {index + 1}
                  </button>
                </li>
              )
            )}
        </ul>
      </nav>
    </div>
  );
}

export default Visetpage;