import React, { useState } from "react";
import "./Booking.css";
const Booking = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [preferred, setPreferred] = useState("");
  const [flag, setFlag] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const handleTime = (e) => {
    setTime(e.target.value);
  };
  const handleGuests = (e) => {
    setGuests(e.target.value);
  };
  const handlePreferred = (e) => {
    setPreferred(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFlag(true);
    setName("");
    setEmail("");
    setDate("");
    setTime("");
    setGuests("");
    setPreferred("");
  };
  return (
    <>
      <div className="bookingWrapper">
        {flag ? (
          <div className="confirmModal">
            <h2>
              Your booking details are submitted.
              <br />
              <br />
              Please check your email for confirmation.
            </h2>
          </div>
        ) : (
          <>
            <h3>Book a Table</h3>
            <form action="" className="bookingForm">
              <div className="inputField">
                <label htmlFor="FullName">Full Name</label>
                <input
                  type="text"
                  name="FullName"
                  placeholder="Enter Your Full Name"
                  value={name}
                  onChange={(e) => {
                    handleName(e);
                  }}
                />
              </div>
              <div className="inputField">
                <label htmlFor="email">Email ID</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email ID"
                  value={email}
                  onChange={(e) => {
                    handleEmail(e);
                  }}
                />
              </div>
              <div className="inputField">
                <label htmlFor="date">Date of Reservation</label>
                <input
                  type="date"
                  name="date"
                  value={date}
                  onChange={(e) => {
                    handleDate(e);
                  }}
                />
              </div>
              <div className="inputField">
                <label htmlFor="Time">Time of Reservation</label>
                <input
                  type="time"
                  name="Time"
                  value={time}
                  onChange={(e) => {
                    handleTime(e);
                  }}
                />
              </div>
              <div className="inputField">
                <label htmlFor="guest">Number of Guests</label>
                <input
                  type="number"
                  name="guest"
                  placeholder="Enter Number of Guests"
                  value={guests}
                  onChange={(e) => {
                    handleGuests(e);
                  }}
                />
              </div>
              <div className="inputField">
                <label htmlFor="table">Preferred Table</label>
                <label for="Outdoor">
                  <input
                    type="radio"
                    name="table"
                    id="Outdoor"
                    value="Outdoor"
                    checked={preferred === "Outdoor"}
                    onChange={(e) => {
                      handlePreferred(e);
                    }}
                  />
                  Outdoor
                </label>
                <label for="Indoor">
                  <input
                    type="radio"
                    name="table"
                    id="Indoor"
                    value="Indoor"
                    checked={preferred === "Indoor"}
                    onChange={(e) => {
                      handlePreferred(e);
                    }}
                  />
                  Indoor
                </label>
              </div>
              <button
                type="submit"
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                CONFIRM
              </button>
            </form>
          </>
        )}
      </div>
    </>
  );
};

export default Booking;
