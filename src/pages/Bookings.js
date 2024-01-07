import { useState, useReducer } from "react"
import { useNavigate } from "react-router-dom";

import BookingForm from '../components/BookingForm';

function Bookings() {
  const seededGenerator = (date, hour) => {
    const m = 9;
    const d = date.getDate();
    const result = ((d + hour) % m ) / 10;

    return result;
  }

  const fetchAPI = (date) => {
    let result = [];

    result.push("--- Select a Time ---")

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
    switch (action.type) {
      case 'change':
        break;
      default:
        break;
    }
    return state;
  }

  const submitAPI = formData => true;

  function submitForm(e) {
    e.preventDefault();
    if (submitAPI()) {
      navigate("/reservations/confirmation");
    };
  }

  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const [availableOccasions] = useState([
    "Birthday",
    "Anniversary"
  ]);

  return (
    <main>
      <BookingForm 
        availableTimes={availableTimes} 
        availableOccasions={availableOccasions}
        onDateChange={dispatch}
        onSubmit={submitForm}>
      </BookingForm>
    </main>
  );
}

export default Bookings;
