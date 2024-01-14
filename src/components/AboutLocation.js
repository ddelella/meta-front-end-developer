import './AboutLocation.css';

function AboutLocation() {
  return (
    <section id="about-location" className="container py-4">
      <div className="row">
        <div className="col-6 p-3">
          <h1 className="m-0 p-0">Little Lemon</h1>
          <h2 className="m-0 p-0">Cincinnati, OH</h2>
          <p className="my-2">Our restaurant is only one, of a few, Greek restaurants in the Queen City. We offer the most picturesque views of the river accompanied by amazon food!</p>
          <p className="my-2">We opened in 2023 and can seat up to 400 guests. We are open for both lunch and dinner. Our new chefs come to us directly from Greece. With them comes the most authentic Greek cuisine in the city.</p>
          <p className="my-2">We also have an event room to host your party, wedding rehearsal, or friend gathering. Use the contact information below to get more details.</p>
        </div>
        <div className="col-6 p-3 text-end">
          <img src="/images/Mario and Adrian A.jpg" alt="Mario and Adrian"/>
        </div>
      </div>
    </section>
  );
}

export default AboutLocation;
