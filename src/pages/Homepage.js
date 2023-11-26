import Hero from '../components/Hero';
import Specials from '../components/Specials';
import Testimonials from '../components/Testimonials';

import './Homepage.css';

function Homepage() {
  return (
    <main>
      <Hero/>
      <Specials/>
      <Testimonials/>
    </main>
  );
}

export default Homepage;
