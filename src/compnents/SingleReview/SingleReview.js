import React from "react";
import { Col, Row } from "react-bootstrap";
import "./SingleReview.css";

const SingleReview = (props) => {
  const review = props.review;
  return (
    <Col sm={4}>
      <div className="single-review">
        <p>{review.comment}</p>
        <br />
        <Row>
          <Col sm={4}>
            <img className="review-img" rounded src={review.photo} alt="" />
          </Col>
          <Col sm={8}>
            <h6 className="sm-title">{review.name}</h6>
            <p>{review.city}</p>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default SingleReview;
