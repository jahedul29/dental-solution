import React from "react";
import { Col } from "react-bootstrap";

const SingleService = (props) => {
  const service = props.service;
  return (
    <Col className="text-center p-4" sm={4}>
      <img className="w-25 m-2" src={service.photo} alt="" />
      <h6 className="p-4">{service.title}</h6>
      <p className="text-muted">{service.details}</p>
    </Col>
  );
};

export default SingleService;
