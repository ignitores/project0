
import React from "react"; 
import './ContactForm.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/Footer/Footer';
import { Container, Row, Col } from "react-bootstrap";
import { contactConfig } from "./content_option";
export default function ContactForm() {
  
  return (
    <>
    <Container>
   
      <Row className="mb-5 mt-3">
        <Col lg="8">
          <h1 className="display-4 mb-4">Contact Us</h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>
      <br/>
      <Row className="sec_sp">
        <Col lg="5" className="mb-5">
          <h3 className="color_sec py-4">Get in touch</h3>
          <address>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
              {contactConfig.YOUR_EMAIL}
            </a>
            <br />
            <br />
            {contactConfig.hasOwnProperty("YOUR_FONE") ? (
              <p>
                <strong>Phone:</strong> {contactConfig.YOUR_FONE}
              </p>
            ) : (
              ""
            )}
          </address>
          <p>{contactConfig.description}</p>
        </Col>
        <Col lg="7" className="d-flex align-items-center">
          <form  className="contact__form w-100">
            <Row>
              <Col lg="6" className="form-group">
                <input
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Name" 
                  type="text"
                  required 
                />
              </Col>
              <Col lg="6" className="form-group">
                <input
                  className="form-control rounded-0"
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email" 
                  required 
                />
              </Col>
            </Row>
            <textarea
              className="form-control rounded-0"
              id="message"
              name="message"
              placeholder="Message"
              rows="5" 
              required
            ></textarea>
            <br />
            <Row>
              <Col lg="12" className="form-group">
                <button className="btn ac_btn" type="submit"> 
                Send
                </button>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </Container>
    <Navbar/>
    <Footer/>
    </>
);
}


