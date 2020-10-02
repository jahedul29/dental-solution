import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const ExceptionalService = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col sm={4}>
          <img className="w-100" src="https://i.imgur.com/f3AXCEf.png" alt="" />
        </Col>
        <Col sm={8}>
          <h2>Exceptional Dental Care, on your terms</h2>
          <br />
          <p className="text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            reprehenderit voluptates tempora itaque neque ipsam rem praesentium
            provident ullam officiis? Aspernatur delectus exercitationem, totam
            deleniti soluta necessitatibus ducimus sint! Similique laboriosam,
            repudiandae maxime eaque beatae minus velit maiores officia
            exercitationem. praesentium provident ullam officiis? Aspernatur
            delectus exercitationem, totam deleniti soluta necessitatibus
            ducimus sint! Similique laboriosam, repudiandae maxime eaque beatae
            minus velit maiores officia exercitationem. maiores officia
            exercitationem. praesentium provident ullam officiis? Aspernatur
            delectus exercitationem, totam deleniti soluta necessitatibus
            ducimus sint! Similique laboriosam, repudiandae maxime eaque beatae
            minus velit maiores officia exercitationem.
          </p>
          <br />
          <button className="main-button">Learn More</button>
        </Col>
      </Row>
    </Container>
  );
};

export default ExceptionalService;
