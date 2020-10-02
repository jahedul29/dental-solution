import {
  faClock,
  faMapMarkedAlt,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner">
      <div
        style={{
          width: "70%",
          height: "100%",
          float: "left",
          backgroundImage: "url('https://i.imgur.com/BJaiA26.png')",
          backgroundPosition: "center",
          backgroundSize: "100%",
        }}
      >
        <img src="" alt="" />
      </div>
      <div
        style={{
          width: "30%",
          float: "left",
          height: "100%",
          backgroundColor: "#3A4256",
        }}
      ></div>

      <div
        style={{
          position: "relative",
          zIndex: "1",
          top: "-540px",
          width: "90%",
          margin: "auto",
        }}
      >
        <Row>
          <Col md={6} style={{ padding: "0 80px" }}>
            <h1>Keep Smiling to be Happy</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
              sunt doloribus, minus nemo ex neque deserunt vitae ipsum incidunt
              dolore!
            </p>
            <button className="main-button">Get Appointment</button>
          </Col>
          <Col className="d-sm-none d-md-block" md={6}>
            <img
              className="w-100"
              src="https://i.imgur.com/5RIlDdl.png"
              alt=""
            />
          </Col>
        </Row>
      </div>

      <div
        style={{
          position: "relative",
          zIndex: "1",
          top: "-390px",
          width: "80%",
          margin: "auto",
        }}
      >
        <Row>
          <Col sm={4}>
            <div
              style={{ backgroundColor: " #0fb4ce" }}
              className="banner-bottom-rect"
            >
              <Row>
                <Col sm={{ span: 2, offset: 1 }}>
                  <FontAwesomeIcon
                    style={{ fontSize: "40px" }}
                    icon={faClock}
                  ></FontAwesomeIcon>
                </Col>
                <Col sm={8}>
                  <h6>Opening Hours</h6>
                  <p>Lorem ipsum dolor sit amet.</p>
                </Col>
              </Row>
            </div>
          </Col>
          <Col sm={4}>
            <div
              style={{ backgroundColor: "#3A4256" }}
              className="banner-bottom-rect"
            >
              <Row>
                <Col sm={{ span: 2, offset: 1 }}>
                  <FontAwesomeIcon
                    style={{ fontSize: "40px" }}
                    icon={faMapMarkedAlt}
                  ></FontAwesomeIcon>
                </Col>
                <Col sm={8}>
                  <h6>Opening Hours</h6>
                  <p>Lorem ipsum dolor sit amet.</p>
                </Col>
              </Row>
            </div>
          </Col>
          <Col sm={4}>
            <div
              style={{ backgroundColor: " #0fb4ce" }}
              className="banner-bottom-rect"
            >
              <Row>
                <Col sm={{ span: 2, offset: 1 }}>
                  <FontAwesomeIcon
                    style={{ fontSize: "40px" }}
                    icon={faPhoneVolume}
                  />
                </Col>
                <Col sm={8}>
                  <h6>Opening Hours</h6>
                  <p>Lorem ipsum dolor sit amet.</p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Banner;
