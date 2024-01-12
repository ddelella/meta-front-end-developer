import { useReducer } from "react"
import { useNavigate } from "react-router-dom";

import BookingForm from '../components/BookingForm';

function Bookings() {
  const navigate = useNavigate();

  // The following two functions are used to replace the broken link to api.js provided in the 
  // Week 3 documentation.

  const seededGenerator = (date, hour) => {
    const m = 9;
    const d = date.getDate();
    const result = ((d + hour) % m ) / 10;

    return result;
  }

  const fetchAPI = (date) => {
    let result = [];
    for (let hour = 15; hour <= 23; hour++) {
        if(seededGenerator(date, hour) < 0.5) result.push(hour + ':00');
        if(seededGenerator(date, hour + 7) < 0.5) result.push(hour + ':30');
    }
    return result;
  };

  function initializeTimes() {
    return fetchAPI(new Date());
  }

  function updateTimes(state, action) {
    return state;
  }

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  function submitForm(e) {
    e.preventDefault();
    navigate("/reservations/confirmation");
  }

  return (
    <main>
      <BookingForm
        availableTimes={availableTimes}
        onDateChange={dispatch}
        onSubmit={submitForm}>
      </BookingForm>
    </main>
  );
}

export default Bookings;
