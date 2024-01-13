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
    return fetchAPI(new Date(action));
  }

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  const submitForm = (e, formData) => {
    const form = document.getElementById('makeAReservationForm');
    form.classList.add('was-validated')

    if (form.checkValidity()) {
      navigate("/reservations/confirmation");
    }

    e.preventDefault();
    e.stopPropagation();
  }

  return (
    <main>
      <BookingForm
        availableTimes={availableTimes}
        onDateChange={dispatch}
        onFormSubmit={submitForm}>
      </BookingForm>
    </main>
  );
}

export default Bookings;
