import './Specials.css';

function Special(props) {
  return (
    <article className="card special">
      <img src={props.image} className="card-img-top" alt={props.imageAlt}/>
      <div className="card-body">
        <div className="row">
          <div className="col-9">
            <h5 className="card-title">{props.title}</h5>
          </div>
          <div className="col-3 price">
            {props.price}
          </div>
        </div>
        <p className="card-text">{props.text}</p>
      </div>
      <div className="card-footer fw-bold">
        Order a delivery <i className="fa-solid fa-truck"></i>
      </div>
    </article>
  );
}

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
    <section id="specials" className="container-fluid">
      <div className="row align-middle">
        <div className="col-6">
          <h1>Specials</h1>
        </div>
        <div className="col-6 text-end align-bottom">
          <button className="btn btn-primary">Online Menu</button>
        </div>
      </div>
      <div id="specials-list" className="d-flex justify-content-between flex-wrap">
        {data.map((special) => <Special title={special.title} price={special.price} image={special.image} imageAlt={special.imageAlt} text={special.text}/>)}
      </div>
    </section>
  );
}

export default Specials;
