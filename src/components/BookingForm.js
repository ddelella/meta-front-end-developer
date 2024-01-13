import { useState } from "react"

import './BookingForm.css';

function BookingForm({availableTimes, onDateChange, onFormSubmit}) {
  const availableOccasions = [
    "Birthday",
    "Anniversary"
  ];

  const today = new Date().toISOString().split('T')[0];
  const maximumDate = new Date(Date.now() + 180 * 24*60*60*1000).toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    reservationDate: today,
    reservationTime: "",
    numberOfGuests: 1,
    occasion: "None",
  });

  const handleInputChange = (e) => {
    if (e.target.name === 'reservationDate') {
      onDateChange(e.target.value);
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="container" aria-label="Make a Reservation">
      <div className="row">
        <div className="col">
          <h1>Make a Reservation</h1>
          <p>Fill out the form below and submit to secure a reservation at the restaurant. You must select a date/time as well as the number of guests.</p>
        </div>
      </div>
      <form name="makeAReservationForm" id="makeAReservationForm"
        className="needs-validation"
        onSubmit={(e) => onFormSubmit(e, formData)}
        noValidate>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="reservationDate" className="form-label">Select a Date:</label>
            <input id="reservationDate" name="reservationDate" data-testid="reservationDate"
              type="date"
              className="form-control"
              min={today}
              max={maximumDate}
              required
              value={formData.reservationDate}
              aria-label="Reservation Date"
              onChange={handleInputChange}/>
          </div>
          <div className="col">
            <label htmlFor="reservationTime" className="form-label">Select a Time:</label>
            <select id="reservationTime" name="reservationTime" data-testid="reservationTime"
              className="form-select"
              required
              value={formData.reservationTime}
              aria-label="Reservation Time"
              onChange={handleInputChange}>
                <option disabled value="">Select a Time</option>
                {availableTimes?.map(item => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
            </select>
            <div className="invalid-feedback">Please select a valid time</div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="numberOfGuests" className="form-label">Number of Guests:</label>
            <input id="numberOfGuests" name="numberOfGuests" data-testid="numberOfGuests"
              type="number"
              className="form-control"
              placeholder="1"
              min="1"
              max="10"
              value={formData.numberOfGuests}
              aria-label="Number of Guests"
              onChange={handleInputChange}/>
          </div>
          <div className="col">
            <label htmlFor="occasion" className="form-label">Occasion</label>
            <select id="occasion" name="occasion" data-testid="occasion"
              className="form-control"
              value={formData.occasion}
              aria-label="Occasion"
              onChange={handleInputChange}>
                <option value="None">None</option>
                {availableOccasions.map(item => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col text-right">
            <input id="submit" name="submit"
              type="submit"
              className="btn btn-primary"
              value="Make Your reservation"
              aria-label="Submit"/>
          </div>
        </div>
      </form>
    </main>
  );
}

export default BookingForm;
