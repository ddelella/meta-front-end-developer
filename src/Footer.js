import Nav from './Nav';
import SocialMediaLinks from './components/SocialMediaLinks';

import './Footer.css';

function Footer() {
  return (
    <footer className="container-fluid">
      <div className="row">
        <div className="col-2 p-3 text-center">
          <img src="/images/footer-logo.png" alt="Little Lemon" />
        </div>
        <div className="col-3 p-3">
          <h4>Navigation</h4>
          <Nav/>
        </div>
        <div className="col-4 p-3">
          <h4>Contact</h4>
          <p>
            123 Lemon Way<br/>
            Cincinnati, OH 99999<br/>
            P: (555) 111-2222<br/>
            E: <a href="mailto:contact@littlelemonrestaurant.com">contact@littlelemonrestaurant.com</a>
          </p>
        </div>
        <div className="col-3 p-3">
          <h4>Social Media</h4>
          <SocialMediaLinks/>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
