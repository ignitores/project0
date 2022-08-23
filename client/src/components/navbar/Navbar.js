import React, { useState } from "react";
import "./Navbar.css";
import { FaShoppingCart, FaUserAlt } from 'react-icons/fa';

// import logo from './img/re.jpg';
//import TextField from "@mui/material/TextField";
//import { FiSearch} from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      
      <div className="nav-logo">
       
        {/* {<img src="./img/re.jpg" className="logo"/>} */}
        <div class="logo" href="/home">
            
        </div>
        
      </div>
      
     
      <div className="search">
        <div className="input-wrapper">
          <div class="fa fa-search"></div> &nbsp;
          <input type="text" placeholder=" Search" />
          <div className="fa fa-times"></div>
        </div>
      </div>


      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/gallery">Gallery</a>
        <a href="/contact">Contact</a>

        <a href="/home">
          <FaShoppingCart />
        </a>
        <a href="/register">
          <FaUserAlt />
        </a>

      </div>

      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;