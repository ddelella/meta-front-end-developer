import Nav from './Nav';
import SocialMediaLinks from './SocialMediaLinks';

import './Footer.css';

function Footer() {
  return (
    <footer>
      <div class="container py-3">
        <div id="footer" className="d-flex gap-3">
          <div className="col-md-2 col-sm-12">
            <img src="/images/footer-logo.png" alt="Little Lemon" />
          </div>
          <div className="col-md-3 col-sm-12">
            <h4>Navigation</h4>
            <Nav isFooter={true}/>
          </div>
          <div className="col-md-4 col-sm-12">
            <h4>Contact</h4>
            <p>
              123 Lemon Way<br/>
              Cincinnati, OH 99999<br/>
              P: (555) 111-2222<br/>
              E: <a href="mailto:contact@littlelemonrestaurant.com">contact@littlelemonrestaurant.com</a>
            </p>
          </div>
          <div className="col-md-3 col-sm-12">
            <h4>Social Media</h4>
            <SocialMediaLinks/>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
