
import React from "react"; 
import './about.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/Footer/Footer';
import { Container, Row, Col } from "react-bootstrap";
import { contactConfig } from "./content_option";
export default function About() {
  
  return (
    <>
    <Container>
   
      <Row className="mb-5 mt-3">
        <Col lg="8">
          <h1 className="display-4 mb-4">About Us</h1>
          <hr className="t_border my-4 ml-0 text-left" />
    
          <img src="https://image.shutterstock.com/image-photo/cute-hispanic-female-business-owner-260nw-1396533020.jpg"/>
     </Col>
      </Row>
      <br/>
      <Row className="sec_sp">
        <Col lg="5" className="mb-5">
          <h4 className="color_sec py-4">Who are we?</h4>
           
          <p>{contactConfig.description}</p>
        </Col>
        <Col lg="7" className="d-flex align-items-center">
          
       
        </Col>
      </Row>
      
    </Container>
    <Navbar/>
    <Footer/>
    </>
   );
}

