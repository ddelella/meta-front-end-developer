import './Header.css';

import Nav from './Nav';

function Header() {
  return (
    <header id="header" className="container-fluid">
      <div className="row">
        <div className="col-xxl-5 col-lg-4 text-center">
          <img src="/images/wide-logo.png" alt="Little Lemon"/>
        </div>
        <div className="col-xxl-7 col-lg-8">
          <Nav/>
        </div>
      </div>
    </header>
  );
}

export default Header;
