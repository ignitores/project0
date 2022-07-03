import React, { useState } from "react";
import "./Navbar.css";
import logo from './img/re.jpg';
import { FaShoppingCart,FaUserAlt } from 'react-icons/fa';
//import { FiSearch} from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <div className="nav-logo">
     <img src="./img/re.jpg" alt="" className="logo"/></div>

      <div className="search-input">
        <a href="#" target="_blank" hidden> </a>
        <label>
        <input type="checkbox"/>
        <input type="text"  placeholder="search here..."/>
        </label>
       {/* <a>
        <FiSearch/>
  </a>*/}
     
      </div>
     
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/gallery">Gallery</a>
        <a href="/contact">Contact</a>
        
          <a href="#">
          <FaShoppingCart/>
          </a>
          <a href="#">
          <FaUserAlt/>
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