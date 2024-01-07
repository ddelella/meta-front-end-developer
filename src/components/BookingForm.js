import { useState } from "react"

import './BookingForm.css';

function BookingForm({availableTimes, availableOccasions, onDateChange, onSubmit}) {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [guests, setGuests] = useState();
  const [time, setTime] = useState();
  const [occasion, setOccasion] = useState();

  return (
    <form className="container mb-3" onSubmit={onSubmit}>
      <div className="row">
        <div className="col">
          <h1>Make a Reservation</h1>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <label htmlFor="res-date" className="form-label">Choose date</label>
          <input id="res-date" type="date" className="form-control" value={date} onChange={(e) => {
            setDate(e.target.value);
            onDateChange({ 
              type: 'change', 
              parameters: { 
                previousDate: date, 
                newDate: e.target.value 
              }
            });
          }}/>
        </div>
        <div className="col">
          <label htmlFor="res-time" className="form-label">Choose time</label>
          <select id="res-time" className="form-select" value={time} onChange={(e) => {setTime(e.target.value);}}>
            {availableTimes.map(item => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <label htmlFor="guests" className="form-label">Number of guests</label>
          <input type="number" className="form-control" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => {setGuests(e.target.value);}}/>
        </div>
        <div className="col">
          <label htmlFor="occasion" className="form-label">Occasion</label>
          <select id="occasion" className="form-control" value={occasion} onChange={(e) => {setOccasion(e.target.value);}}>
            {availableOccasions.map(item => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col text-right">
          <input type="submit" className="btn btn-primary" value="Make Your reservation" />
        </div>
      </div>
    </form>
  );
}

export default BookingForm;
