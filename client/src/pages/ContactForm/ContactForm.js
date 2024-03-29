
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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14010.152584811774!2d83.86485632361241!3d28.613629205928046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39be1ec6808cffc1%3A0x48172cc9dd372cef!2sAnnapurna%20I!5e0!3m2!1sen!2sin!4v1662175101624!5m2!1sen!2sin" width="500" height="400"></iframe>
          </Col>
        </Row>
        <br />
        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <h3 >Get in touch</h3>
            <hr />
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
            <form className="contact__form w-100">
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
      <Navbar />
      <Footer />
    </>
  );
}


