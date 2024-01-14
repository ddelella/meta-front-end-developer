import { Link } from "react-router-dom";

import './Nav.css';

function Nav({ isFooter }) {
  const homeUrl = "/";
  const aboutUrl = "/about";
  const menuUrl = "/menu";
  const reservationUrl = "/reservations";
  const orderUrl = "/order";
  const loginUrl = "/login";

  if (isFooter) {
    return (
      <nav>
        <ul>
          <li><Link to={homeUrl}>Home</Link></li>
          <li><Link to={aboutUrl}>About</Link></li>
          <li><Link to={menuUrl}>Menu</Link></li>
          <li><Link to={reservationUrl}>Reservations</Link></li>
          <li><Link to={orderUrl}>Order Online</Link></li>
          <li><Link to={loginUrl}>Login</Link></li>
        </ul>
      </nav>
    );
  }

  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#little-lemon-navbar" aria-controls="little-lemon-navbar" aria-expanded="false" aria-label="Toggle Navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="little-lemon-navbar">
          <a class="navbar-brand" href={homeUrl}>
            <img src="/images/wide-logo.png" alt="Little Lemon"/>
          </a>
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to={homeUrl}>Home</Link>
            </li>
            <li class="nav-item">
              <Link to={aboutUrl}>About</Link>
            </li>
            <li class="nav-item">
              <Link to={menuUrl}>Menu</Link>
            </li>
            <li class="nav-item">
              <Link to={reservationUrl}>Reservations</Link>
            </li>
            <li class="nav-item">
              <Link to={orderUrl}>Order Online</Link>
            </li>
            <li class="nav-item">
              <Link to={loginUrl}>Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
