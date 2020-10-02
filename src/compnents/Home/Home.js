import React from "react";
import Banner from "./../Banner/Banner";
import AvailableServices from "./../AvailableServices/AvailableServices";
import ExceptionalService from "./../ExceptionalService/ExceptionalService";
import HomeAppointment from "./../HomeAppointment/HomeAppointment";
import Testimonial from "./../Testimonial/Testimonial";
import HomeContact from "./../HomeContact/HomeContact";

const Home = () => {
  return (
    <>
      <Banner />
      <AvailableServices />
      <ExceptionalService />
      <HomeAppointment />
      <Testimonial />
      <HomeContact />
    </>
  );
};

export default Home;
