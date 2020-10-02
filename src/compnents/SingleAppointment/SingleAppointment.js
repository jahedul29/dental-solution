import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./SingleAppointment.css";

const SingleAppointment = (props) => {
  const appointment = props.appointment;
  let history = useHistory();
  const [modalShow, setModalShow] = useState(false);

  return (
    <Col sm={4}>
      <div className="text-center single-appointment">
        <h5 className="sm-title">{appointment.title}</h5>
        <h6>{`${new Date(appointment.from).toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })} - ${new Date(appointment.to).toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })}`}</h6>
        <span>{appointment.space} seat available</span>
        <br />
        <button onClick={() => setModalShow(true)} className="main-button">
          Book Appointment
        </button>
      </div>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="rounded">
          <h5 className="sm-title text-center">{appointment.title}</h5>
          <h5 className="text-center">Book Your Appointment</h5>
          <br />
          <form className="px-2 text-right" action="">
            <input
              className="form-control"
              placeholder="Your Name*"
              type="text"
              name=""
              id=""
            />
            <br />
            <input
              className="form-control"
              placeholder="Your Email*"
              type="text"
              name=""
              id=""
            />
            '
            <br />
            <input
              className="form-control"
              placeholder="Phone Number*"
              type="text"
              name=""
              id=""
            />
            <br />
            <input
              className="form-control"
              placeholder="Address"
              type="text"
              name=""
              id=""
            />
            <br />
            <button className="w-25 mr-auto main-button" type="submit">
              Submit
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </Col>
  );
};

export default SingleAppointment;
