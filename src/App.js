import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Bookings from './pages/Bookings';

import './App.css';
import ConfirmedBooking from "./components/ConfirmedBooking";

function App() {
  return (
    <>
      <Header/>
      <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/reservations" element={<Bookings/>}/>
          <Route path="/reservations/confirmation" element={<ConfirmedBooking confirmationTitle="Thank You!" confirmationMessage="We have confirmed your reservation."/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;