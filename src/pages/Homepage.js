import Hero from '../components/Hero';
import Specials from '../components/Specials';
import Testimonials from '../components/Testimonials';
import AboutLocation from '../components/AboutLocation';

import './Homepage.css';

function Homepage() {
  return (
    <main>
      <Hero/>
      <Specials/>
      <Testimonials/>
      <AboutLocation/>
    </main>
  );
}

export default Homepage;
