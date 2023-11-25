import { Link } from "react-router-dom";

import './Nav.css';

function Nav() {
  return (
    <nav id="nav">
      <ul>
        <li><h4><Link to="/">Home</Link></h4></li>
        <li><h4><Link to="/about">About</Link></h4></li>
        <li><h4><Link to="/menu">Menu</Link></h4></li>
        <li><h4><Link to="/reservations">Reservations</Link></h4></li>
        <li><h4><Link to="/order">Order Online</Link></h4></li>
        <li><h4><Link to="/login">Login</Link></h4></li>
      </ul>
    </nav>
  );
}

export default Nav;
