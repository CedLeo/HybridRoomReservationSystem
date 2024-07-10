import React, { useState } from 'react'
import "./setsched.css"
import Topbar from '../../components/topbar/Topbar'
// import { Link } from 'react-router-dom';
// import Schedule from '../../components/schedule/Schedule';


export default function Setsched() {



  const [formData, setFormData] = useState({
    facultyName: '',
    email: '',
    subject: '',
    unitStrand: '',
    room:'',
    date: '',
    timeIn: '',
    timeOut: ''
  });

  const [formDataArray, setFormDataArray] = useState([]);


  // Function to handle changes in form inputs
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const [roomName, setRoomName] = useState('Hybrid Room 1');

  // Function to handle room change
  const handleChangeRoom = () => {
    // Change the room name
    setRoomName('Hybrid Room 2');
  };


  // Function to handle form submission
  const handleFormSubmit = () => {
    if (
      formData.facultyName &&
      formData.email &&
      formData.subject &&
      formData.unitStrand &&
      formData.date &&
      formData.timeIn &&
      formData.timeOut
    ) {
    // Here you can perform actions with the form data, such as storing it in a database or displaying it
    console.log(formData);
    setFormDataArray([...formDataArray, formData]);
    // Reset form fields
    setFormData({
      facultyName: '',
      email: '',
      subject: '',
      unitStrand: '',
      date: '',
      timeIn: '',
      timeOut: ''
    });

    } else {
      // Alert user to fill in all fields
      alert('Please fill in all fields.');
    }
  };



  return (
    <>
    <div className="contentWrapper">
      <Topbar/>
      <div className="content">
      {/* <div className="goBackBtn">
        <Link to="/" className="go-back">Go back</Link>
      </div> */}

      <div className="reserveContainer">
        <div className="reserveForm">
          <div className="formRight">
            <div className="reservationTitle">
              <h1>Reservations</h1>
            </div>
            <div className="formName forms">
              <h3>Name of faculty</h3>
              <input type="text" name="facultyName" value={formData.facultyName} onChange={handleInputChange} req/>
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
        {/* Button to change the room */}
        <button onClick={handleChangeRoom} className='changeBtn'>Change rooms? click here</button>
      </div>
      <div className="roomDesc">
        {/* Display the room name */}
        <h1>{roomName}</h1>
        <p>1st floor</p>
        <p>(Without Internet Connection)</p>
      </div>
    </div>
      </div>
    </div>
    <div className="scheduleWrapper">
  <div className="formDataContainer">
    <div className="formDataColumn facultyData">
      <h3>Name of Faculty</h3>
      {formDataArray.map((data, index) => (
        <p key={index}>{data.facultyName}</p>
      ))}
    </div>
    <div className="formDataColumn facultyEmail">
      <h3>Email Address</h3>
      {formDataArray.map((data, index) => (
        <p key={index}>{data.email}</p>
      ))}
    </div>
    <div className="formDataColumn">
      <h3>Subject</h3>
      {formDataArray.map((data, index) => (
        <p key={index}>{data.subject}</p>
      ))}
    </div>
    <div className="formDataColumn">
      <h3>Unit Strand</h3>
      {formDataArray.map((data, index) => (
        <p key={index}>{data.unitStrand}</p>
      ))}
    </div>
    <div className="formDataColumn">
      <h3>Room</h3>
      {formDataArray.map((data, index) => (
        <p key={index}>Hybrid Room 1</p>
      ))}
    </div>
    <div className="formDataColumn">
      <h3>Date</h3>
      {formDataArray.map((data, index) => (
        <p key={index}>{data.date}</p>
      ))}
    </div>
    <div className="formDataColumn">
      <h3>Time In</h3>
      {formDataArray.map((data, index) => (
        <p key={index}>{data.timeIn}</p>
      ))}
    </div>
    <div className="formDataColumn">
      <h3>Time Out</h3>
      {formDataArray.map((data, index) => (
        <p key={index}>{data.timeOut}</p>
      ))}
    </div>
  </div>
        </div>
    </div>
    </>
  )
}
