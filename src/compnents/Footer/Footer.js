import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  faFacebook,
  faGooglePlus,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <Row>
        <Col className="my-auto" sm={3}>
          <ul className="text-muted" style={{ listStyleType: "none" }}>
            <li>Emergency dental care</li>
            <li>Tooth Extraction</li>
            <li>Check Up</li>
            <li>Check Up</li>
            <li>Teeth Filling</li>
          </ul>
        </Col>
        <Col sm={3}>
          <h6 className="sm-title">Services</h6>
          <br />
          <ul
            className="text-muted"
            style={{ listStyleType: "none", padding: "0" }}
          >
            <li>Emergency dental care</li>
            <li>Tooth Extraction</li>
            <li>Check Up</li>
            <li>Check Up</li>
            <li>Teeth Filling</li>
            <li>Teeth Filling</li>
            <li>Teeth Filling</li>
          </ul>
        </Col>
        <Col sm={3}>
          <h6 className="sm-title">Services</h6>
          <br />
          <ul
            className="text-muted"
            style={{ listStyleType: "none", padding: "0" }}
          >
            <li>Emergency dental care</li>
            <li>Tooth Extraction</li>
            <li>Check Up</li>
            <li>Check Up</li>
            <li>Teeth Filling</li>
            <li>Teeth Filling</li>
            <li>Teeth Filling</li>
          </ul>
        </Col>
        <Col sm={3}>
          <h6 className="sm-title">Our Address</h6>
          <br />
          <ul
            className="text-muted"
            style={{ listStyleType: "none", padding: "0" }}
          >
            <li>Dhaka</li>
            <li>Dhanmondi</li>
            <br />
            <li>
              <FontAwesomeIcon
                className="social-icon"
                icon={faFacebook}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="social-icon"
                icon={faGooglePlus}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="social-icon"
                icon={faTwitter}
              ></FontAwesomeIcon>
            </li>
            <br />
            <li>Call Now</li>
            <li>
              {" "}
              <button className="main-button">01861271126</button>{" "}
            </li>
          </ul>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
