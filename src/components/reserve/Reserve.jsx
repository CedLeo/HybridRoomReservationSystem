import React, { useState } from 'react';
import "./reserve.css";
import { Link } from "react-router-dom";

export default function Reserve() {


  return (
    <div className="content">
      <div className="goBackBtn">
        <Link to="/" className="go-back">Go back</Link>
      </div>

      <div className="reserveContainer">
        <div className="reserveForm">
          <div className="formRight">
            <div className="reservationTitle">
              <h1>Reservations</h1>
            </div>
            <div className="formName forms">
              <h3>Name of faculty</h3>
              <input type="text" name="facultyName" value={formData.facultyName} onChange={handleInputChange} />
            </div>
            <div className="formEmail forms">
              <h3>Email Address</h3>
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
            </div>
            <div className="formSubject forms">
              <h3>Subject</h3>
              <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} />
            </div>
            <div className="formUnit forms">
              <h3>Unit Strand</h3>
              <input type="text" name="unitStrand" value={formData.unitStrand} onChange={handleInputChange} />
            </div>
          </div>
          <div className="formLeft">
            <div className="formDate forms">
              <h3>Date </h3>
              <input type="date" name="date" value={formData.date} onChange={handleInputChange} />
            </div>
            <div className="timeForms">
              <div className="formTimeIn forms">
                <h3>Time In</h3>
                <input type="time" name="timeIn" value={formData.timeIn} onChange={handleInputChange} />
              </div>
              <div className="formTimeOut forms">
                <h3>Time Out</h3>
                <input type="time" name="timeOut" value={formData.timeOut} onChange={handleInputChange} />
              </div>
            </div>
            <div className="formReserve forms">
              <button  className="reserveBtn" onClick={handleFormSubmit}>Reserve Room</button>
              <a className="checkBtn">Check Availability</a>
            </div>
          </div>
        </div>

        <div className="roomReserve">
          <div className="changeRoom">
            <h2>Change rooms? click here</h2>
          </div>
          <div className="roomDesc">
            <h1>Hybrid Room 1</h1>
            <p>1st floor</p>
            <p>(Without Internet Connection)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
