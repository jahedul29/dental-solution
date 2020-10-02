import React from "react";
import { Container, Row } from "react-bootstrap";
import allReviews from "../../fakeData/reviews";
import SingleReview from "../SingleReview/SingleReview";

const Testimonial = () => {
  return (
    <Container>
      <section className="testimonial my-5">
        <h6 className="sm-title">TESTIMONIAL</h6>
        <h2>What's Our Patient</h2>
        <h2>Says</h2>
        <br />
        <div className="reviews">
          <Row>
            {allReviews.map((review) => (
              <SingleReview review={review}></SingleReview>
            ))}
          </Row>
        </div>
      </section>
    </Container>
  );
};

export default Testimonial;
