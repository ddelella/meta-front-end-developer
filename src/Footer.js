function Footer() {
  return (
    <footer id="footer">
      <div className="contain-fluid">
        <div className="row">
          <div className="col-3 p-3">
            <img src="/images/footer-logo.png" alt="Little Lemon" />
          </div>
          <div className="col-3 p-3">
            <h5>Navigation</h5>
            <ul className="footer-link-list">
              <li className="footer-link">Home</li>
              <li className="footer-link">About</li>
              <li className="footer-link">Menu</li>
              <li className="footer-link">Reservations</li>
              <li className="footer-link">Order Online</li>
              <li className="footer-link">Login</li>
            </ul>
          </div>
          <div className="col-3 p-3">
            <h5>Contact</h5>
            <p>
              123 Lemon Way<br/>
              Cincinnati, OH 99999<br/>
              P: (555) 111-2222<br/>
              E: <a href="mailto:contact@littlelemonrestaurant.com">contact@littlelemonrestaurant.com</a>
            </p>
          </div>
          <div className="col-3 p-3">
            <h5>Social Media</h5>
            <ul className="footer-link-list">
              <li className="footer-link">Facebook</li>
              <li className="footer-link">Instagram</li>
              <li className="footer-link">Eventbrite</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
