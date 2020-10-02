import React, { useContext, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Col, Container, Row } from "react-bootstrap";
import Calendar from "react-calendar";
import "./Appointments.css";
import "react-calendar/dist/Calendar.css";
import availableAppointments from "../../fakeData/appointments";
import SingleAppointment from "../SingleAppointment/SingleAppointment";
import { UserContext } from "../../App";
import ReactDatePicker from "react-datepicker";
import { addDays } from "date-fns";
// import TimePicker from "react-time-picker";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";

// importing datepicker css
import "react-datepicker/dist/react-datepicker.css";

const Appointments = () => {
  const [selectedDate, setSelectedDate] = useState(
    new Date(new Date().toLocaleDateString())
  );
  const [availableApps, setAvailableApps] = useState([]);
  const { loggedInUser } = useContext(UserContext);

  const handleCalenderOnChange = (date) => {
    console.log(date);
    setSelectedDate(date);
  };

  console.log(selectedDate);

  useEffect(() => {
    console.log("Use effect calling");
    console.log(selectedDate);
    if (selectedDate === new Date()) {
      setSelectedDate(new Date());
    }
    fetch(`http://localhost:5000/getAvailableAppsByDate/${selectedDate}`)
      .then((res) => res.json())
      .then((data) => {
        setAvailableApps(data);
      });
  }, [selectedDate]);

  const { register, handleSubmit, control, errors } = useForm();
  const onSubmit = (data) => {
    const availableApp = {
      title: data.title,
      space: data.space,
      date: data.date,
      from: data.from._d,
      to: data.to._d,
    };

    fetch("http://localhost:5000/addAvailableApp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(availableApp),
    })
      .then((res) => res.json())
      .then((data) => alert(data));
  };

  //! important for date conversions
  // data.from._d.toLocaleString("en-US", {
  //   hour: "numeric",
  //   minute: "numeric",
  //   hour12: true,
  // })

  return (
    <>
      <Container className="fullpage-background-container" fluid>
        <section className="appointments">
          <Row>
            <Col sm={6}>
              <h2>Appointments</h2>
              <br />
              <div className="pl-5">
                <Calendar
                  onChange={handleCalenderOnChange}
                  value={selectedDate}
                />
              </div>
            </Col>
            <Col sm={6}>
              <img
                className="w-100"
                src="https://i.imgur.com/5RIlDdl.png"
                alt=""
              />
            </Col>
          </Row>
        </section>
      </Container>
      <Container className="m-5">
        <section className="appointment-list pb-3">
          <h4 className="sm-title text-center">
            Available appointments of {selectedDate.toDateString()}
          </h4>
          <br />
          <Row>
            {availableApps.map((appointment) => (
              <SingleAppointment appointment={appointment}></SingleAppointment>
            ))}
          </Row>
        </section>
        <br />
      </Container>
      {/* {loggedInUser.email === "jahedulh1@gmail.com" && ( */}
      <Container className="mb-5">
        <h2 className="text-center">Add Appointment</h2>
        <div className="w-50 m-auto">
          <form className=" px-5" onSubmit={handleSubmit(onSubmit)}>
            <input
              className="form-control"
              placeholder="Title*"
              name="title"
              ref={register({ required: true })}
            />
            {errors.exampleRequired && <span>{errors.title.message}</span>}
            <br />
            <input
              className="form-control"
              placeholder="How much space?*"
              name="space"
              ref={register({ required: true })}
            />
            {errors.exampleRequired && <span>{errors.space.message}</span>}
            <br />
            <Controller
              control={control}
              defaultValue=""
              name="date"
              rules={{
                required: {
                  value: true,
                  message: "Date required",
                },
              }}
              render={(props) => (
                <ReactDatePicker
                  className="w-100 form-control"
                  placeholderText="Date"
                  minDate={new Date()}
                  maxDate={addDays(new Date(), 7)}
                  dateFormat="dd/MM/yyyy"
                  onChange={(e) => props.onChange(e)}
                  selected={props.value}
                />
              )}
            />
            {errors.date && (
              <span className="error">{errors.date.message}</span>
            )}
            <br />
            <br />
            {/* TimePicker */}
            <Controller
              control={control}
              defaultValue=""
              name="from"
              rules={{
                required: {
                  value: true,
                  message: "From required",
                },
              }}
              render={(props) => (
                <TimePicker
                  className="form-control"
                  use12Hours={true}
                  showSecond={false}
                  placeholder="From Time"
                  onChange={(e) => props.onChange(e)}
                  selected={props.value}
                />
              )}
            />
            {errors.from && (
              <span className="error">{errors.from.message}</span>
            )}
            <br />

            <Controller
              control={control}
              defaultValue=""
              name="to"
              rules={{
                required: {
                  value: true,
                  message: "To required",
                },
              }}
              render={(props) => (
                <TimePicker
                  className="form-control"
                  use12Hours={true}
                  showSecond={false}
                  placeholder="To Time"
                  onChange={(e) => props.onChange(e)}
                  selected={props.value}
                />
              )}
            />
            {errors.to && <span className="error">{errors.to.message}</span>}
            <br />
            <input className="form-control main-button" type="submit" />
          </form>
        </div>
      </Container>
      {/* )} */}
    </>
  );
};

export default Appointments;
