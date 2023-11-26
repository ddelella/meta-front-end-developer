import { Link } from "react-router-dom";

function SocialMediaLinks() {
  return (
    <nav>
      <ul>
        <li><Link to="https://www.facebook.com">Facebook</Link></li>
        <li><Link to="https://www.instagram.com">Instagram</Link></li>
        <li><Link to="https://www.eventbrite.com">Eventbrite</Link></li>
      </ul>
    </nav>
  );
}

export default SocialMediaLinks;
