import { Link } from "react-router-dom";

import './Nav.css';

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand" href="/">
            <img src="/images/wide-logo.png" alt="Little Lemon"/>
          </a>
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link to="/about">About</Link>
            </li>
            <li class="nav-item">
              <Link to="/menu">Menu</Link>
            </li>
            <li class="nav-item">
              <Link to="/reservations">Reservations</Link>
            </li>
            <li class="nav-item">
              <Link to="/order">Order Online</Link>
            </li>
            <li class="nav-item">
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
