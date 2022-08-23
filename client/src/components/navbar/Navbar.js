import React, { useState } from "react";
import "./Navbar.css";
import logo from './img/re.jpg';
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUserAlt } from 'react-icons/fa';
//import TextField from "@mui/material/TextField";
//import { FiSearch} from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()

  const redirectToHome = () => {
    navigate('/home');
  }
  return (
    <div className="Navbar">
      {/* <Link to='/home'> */}
      <div className="nav-logo" onClick={redirectToHome}>
        {/* <img src="./img/re.jpg" className="logo"/> */}
        <div class="logo" href="#">

        </div>
      </div>
      {/* </Link> */}
      <div className="search">
        <div className="input-wrapper">
          <div class="fa fa-search"></div>
          <input type="text" placeholder="Search" />
          <div className="fa fa-times"></div>
        </div>
      </div>


      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/gallery">Gallery</a>
        <a href="/contact">Contact</a>

        <a href="#">
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