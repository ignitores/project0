import React from "react";
import "./Footer.css";


const Footer = () => {
	return (
	  <>
	<span className="footer-title">
	<h1 >Follow Us</h1>	
	</span>
	<div className="footer">
  	 <a href="#">
		<div  className="fa fa-2x fa-facebook"></div>
	 </a>
	 <a href="#">
		<div  className="fa fa-2x fa-twitter"></div>
	 </a>
	 <a href="https://www.instagram.com/radhikascakery/?hl=en">
		<div  className="fa fa-2x fa-instagram"></div>
	 </a>
	 <a href="#">
		<div  className="fa fa-2x fa-youtube"></div>
	 </a>
	 <a href="#">
		<div  className="fa fa-2x fa-linkedin"></div>
	 </a>
  	 		
  	 
  </div>
	  </>
	);
  };
  
  export default Footer;