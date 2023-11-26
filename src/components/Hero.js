import './Hero.css';

function Hero() {
  return (
    <section id="hero" className="container-fluid py-4 ">
      <div className="row">
        <div className="col-6 p-3">
          <h1 className="m-0 p-0">Little Lemon</h1>
          <h2 className="m-0 p-0">Cincinnati, OH</h2>
          <p className="my-2">Come try our newest location with the same great food! You can reserve your table now using the button below.</p>
          <button className="btn btn-primary mt-5">Reserve a Table</button>
        </div>
        <div className="col-6 p-3 text-center">
          <img src="/images/restaurant-food.jpg" alt="Restaurant Food"/>
        </div>
      </div>
    </section>
  );
}

export default Hero;
