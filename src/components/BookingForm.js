import { useState } from "react"

import './BookingForm.css';

function BookingForm({availableTimes, onDateChange, onSubmit}) {
  const [reservationDate, setReservationDate] = useState(new Date().toISOString().split('T')[0]);
  const [reservationTime, setReservationTime] = useState();
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [occasion, setOccasion] = useState("None");

  const availableOccasions = [
    "None",
    "Birthday",
    "Anniversary"
  ];

  return (
    <main className="container" aria-label="Make a Reservation">
      <div className="row">
        <div className="col">
          <h1>Make a Reservation</h1>
          <p>Fill out the form below and submit to secure a reservation at the restaurant. You must select a date/time as well as the number of guests.</p>
        </div>
      </div>
      <form name="makeAReservationForm" onSubmit={onSubmit} className="needs-validation">
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="reservationDate" className="form-label">Select a Date:</label>
            <input id="reservationDate" name="reservationDate" data-testid="reservationDate"
              type="date"
              className="form-control"
              value={reservationDate}
              aria-label="Reservation Date"
              required
              onChange={(e) => {
                setReservationDate(e.target.value);
                onDateChange({
                  type: 'change',
                  parameters: {
                    previousDate: reservationDate,
                    newDate: e.target.value
                  }
                });
              }}/>
              <div className="invalid-feedback">Please select a valid date</div>
          </div>
          <div className="col">
            <label htmlFor="reservationTime" className="form-label">Select a Time:</label>
            <select id="reservationTime" name="reservationTime" data-testid="reservationTime"
              className="form-select"
              value={reservationTime}
              aria-label="Reservation Time"
              required
              onChange={(e) => {
                setReservationTime(e.target.value);
              }}>
                <option>Select a Time</option>
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
              value={numberOfGuests}
              aria-label="Number of Guests"
              onChange={(e) => {
                setNumberOfGuests(e.target.value);
              }}/>
              <div className="invalid-feedback">Number of guest must be between 1 and 10</div>
          </div>
          <div className="col">
            <label htmlFor="occasion" className="form-label">Occasion</label>
            <select id="occasion" name="occasion" data-testid="occasion"
              className="form-control"
              value={occasion}
              aria-label="Occasion"
              onChange={(e) => {
                setOccasion(e.target.value);
              }}>
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
