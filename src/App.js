import { Routes, Route } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Bookings from './pages/Bookings';

import './App.css';
import ConfirmedBooking from "./components/ConfirmedBooking";

function App() {
  return (
    <>
      <Header/>
      <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/reservations" element={<Bookings/>}/>
          <Route path="/reservations/confirmation" element={<ConfirmedBooking confirmationMessage={"Booking Confirmed"}/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;