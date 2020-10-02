import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./HomeAppointment.css";

const HomeAppointment = () => {
  let history = useHistory();

  return (
    <Container style={{ height: "600px" }} className="my-5 p-0" fluid>
      <div className="background-bearer">
        <img
          style={{ width: "130%", opacity: ".1", marginRight: "auto" }}
          src="https://i.imgur.com/TfUYzAU.png"
          alt=""
        />
      </div>

      <div className="appointment-row-container">
        <Row>
          <Col md={6}>
            <img
              className="appointment-img"
              src="https://i.imgur.com/BipiO0a.png"
              alt=""
            />
          </Col>
          <Col className="d-flex align-items-end pb-5" md={6}>
            <div>
              <h6 className="sm-title">APPOINTMENT</h6>
              <br />
              <h2 className="text-white">Make an Appointment</h2>
              <h2 className="text-white">Today</h2>
              <br />
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
                maxime omnis. Doloremque facilis velit quae natus consectetur
                dolor dolores accusamus?
              </p>
              <button
                onClick={() => {
                  history.push("/appointments");
                }}
                className="main-button"
              >
                Learn More
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default HomeAppointment;
