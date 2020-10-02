import React from "react";
import { Container } from "react-bootstrap";
import "./HomeContact.css";

const HomeContact = () => {
  return (
    <Container fluid className="p-0 contact-form-section">
      {/* <div
        style={{ height: "650px", marginTop: "0" }}
        className="background-bearer"
      >
        <img
          style={{ width: "100%", opacity: ".1", marginRight: "auto" }}
          src="https://i.imgur.com/TfUYzAU.png"
          alt=""
        />
      </div> */}
      <div className="contact-form-container text-center">
        <h6 className=" sm-title">CONTACT US</h6>
        <h2 className="text-white">Always Connect With Us</h2>
        <br />
        <br />
        <form action="">
          <input
            className="form-control"
            placeholder="Email Address*"
            type="text"
            name="email"
            id=""
          />
          <br />
          <input
            className="form-control"
            placeholder="Subject*"
            type="text"
            name="subject"
            id=""
          />
          <br />
          <textarea
            className="form-control"
            placeholder="Your message"
            name="message"
            id=""
            rows="10"
          ></textarea>
          <br />
          <button className="w-25 main-button m-auto">Submit</button>
        </form>
      </div>
    </Container>
  );
};

export default HomeContact;
