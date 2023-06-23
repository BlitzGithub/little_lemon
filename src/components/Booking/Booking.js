import React from "react";
import "./Booking.css";
const Booking = () => {
  return (
    <>
      <div className="bookingWrapper">
        <h3>Book a Table</h3>
        <form action="" className="bookingForm">
          <div className="inputField">
            <label htmlFor="FullName">Full Name</label>
            <input
              type="text"
              name="FullName"
              placeholder="Enter Your Full Name"
            />
          </div>
          <div className="inputField">
            <label htmlFor="email">Email ID</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email ID"
            />
          </div>
          <div className="inputField">
            <label htmlFor="date">Date of Reservation</label>
            <input type="date" name="date" />
          </div>
          <div className="inputField">
            <label htmlFor="Time">Time of Reservation</label>
            <input type="time" name="Time" />
          </div>
          <div className="inputField">
            <label htmlFor="guest">Number of Guests</label>
            <input
              type="number"
              name="guest"
              placeholder="Enter Number of Guests"
            />
          </div>
          <div className="inputField">
            <label htmlFor="table">Preferred Table</label>
            <label for="Outdoor">
              <input type="radio" name="table" id="Outdoor" value="Outdoor" />
              Outdoor
            </label>
            <label for="Indoor">
              <input type="radio" name="table" id="Indoor" value="Indoor" />
              Indoor
            </label>
          </div>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            CONFIRM
          </button>
        </form>
      </div>
    </>
  );
};

export default Booking;
