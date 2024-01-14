import { Link } from "react-router-dom";
import Special from './Special';

import './Specials.css';

function Specials() {
  const data = [
    {
      title: "Greek Salad",
      price: "$12.99",
      image: "/images/greek salad.jpg",
      imageAlt: "Greek Salad",
      text: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese garnished with crunchy garlic and rosemary croutons."
    },
    {
      title: "Bruschetta",
      price: "$5.99",
      image: "/images/bruschetta.png",
      imageAlt: "Bruschetta",
      text: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with sales and olive oil."
    },
    {
      title: "Lemon Dessert",
      price: "$5.00",
      image: "/images/lemon dessert.jpg",
      imageAlt: "Lemon Dessert",
      text: "This comes straight from grandma's recipe book. Every last ingredient has been sources and is as authentic as can be imagined."
    }
  ];

  return (
    <section id="specials">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
            <div>
              <h1>Specials</h1>
            </div>
            <div>
              <Link to="/menu" className="btn btn-primary">Online Menu</Link>
            </div>
        </div>
        <div id="specials-list" className="d-flex flex-wrap gap-3 align-items-flex align-content-center">
          {data.map((special) =>
            <Special title={special.title} price={special.price} image={special.image} imageAlt={special.imageAlt} text={special.text}/>
          )}
        </div>
      </div>
    </section>
  );
}

export default Specials;
