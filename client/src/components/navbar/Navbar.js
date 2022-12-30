import React, { useState } from "react";
import "./Navbar.css";
// import logo from './img/re.jpg';
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUserAlt } from 'react-icons/fa';

// import logo from './img/re.jpg';
//import TextField from "@mui/material/TextField";
//import { FiSearch} from 'react-icons/fi';

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()

  const redirectToHome = () => {
    navigate('/home');
  }

  const [filteredData, setfilteredData] = useState([]);

  const handleFilter = (event) => {
    const searchWord = event.target.value
    const newFilter = props.dat.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setfilteredData([]);
    } else {
      setfilteredData(newFilter);
    }
  }

  return (
    <>
      <div className="Navbar">


        <div className="nav-logo" onClick={redirectToHome}>
          {/* <img src="./img/re.jpg" className="logo"/> */}
          <div class="logo" href="#">
          </div>

        </div>


        <div className="search">
          <div className="input-wrapper">
            <div class="fa fa-search"></div> &nbsp;
            <input type="text" placeholder=" Search" onChange={handleFilter} />
            <div className="fa fa-times"></div>
          </div>
        </div>
        {filteredData.length != 0 && (<div className="data-result">
          {
            filteredData.slice(0, 15).map((cakes) => {
              return <p className="data-item" onClick={() => navigate('/details/' + cakes._id)}>{cakes.name}</p>
            })}
        </div>)}

        <div className={`nav-items ${isOpen && "open"}`}>
          <a href="/home">Home</a>
          <a href="/gallery">Gallery</a>
          <a href="/contact">Contact</a>
          <a href="/about">About</a>

          <a href="/cart">
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
    </>
  );
};

export default Navbar;