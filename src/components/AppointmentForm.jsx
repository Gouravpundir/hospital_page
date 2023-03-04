import "../App.css";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AppointmentForm({ onClose, onSubmit }) {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:4000/form", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (data.status) {
      navigate('/');
    }
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <div className="popup-header">
          <h3>Book an Appointment</h3>
          <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" className="form-control" id="name" value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" className="form-control" id="email" value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input type="tel" className="form-control" id="phone" value={formData.phone} onChange={(event) => setFormData({ ...formData, phone: event.target.value })} required />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input type="date" className="form-control" id="date" value={formData.date} onChange={(event) => setFormData({ ...formData, date: event.target.value })} required />
          </div>
          <div className="form-group">
            <label htmlFor="time">Time:</label>
            <input type="time" className="form-control" id="time" value={formData.time} onChange={(event) => setFormData({ ...formData, time: event.target.value })} required />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AppointmentForm;
