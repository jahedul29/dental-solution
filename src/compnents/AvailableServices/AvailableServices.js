import React from "react";
import { Container, Row } from "react-bootstrap";
import allServices from "../../fakeData/services";
import SingleService from "../SingleService/SingleService";
import "./AvailableServices.css";

const AvailableServices = () => {
  return (
    <Container className="my-5">
      <section className="available-services">
        <h6 className="text-center sm-title">OUR SERVICES</h6>
        <h2 className="text-center">Services We Provide</h2>
        <br />
        <Row>
          {allServices.map((service) => (
            <SingleService service={service}></SingleService>
          ))}
        </Row>
      </section>
    </Container>
  );
};

export default AvailableServices;
