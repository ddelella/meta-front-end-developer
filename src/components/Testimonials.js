import './Testimonials.css';

function Testimonial(props) {
  return (
    <article className="testimonial container-fluid p-3">
      <div className="row">
        <div className="col-4">
          <img src={props.image} alt={props.imageAlt}/>
        </div>
        <div className="col-8">
          <h4 className="m-0 p-0">{props.name}</h4>
          Rating: {props.rating}
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          {props.text}
        </div>
      </div>
    </article>
  );
}

function Testimonials() {
  const data = [
    {
      rating: "4.5",
      name: "Juan K",
      image: "/images/testimonial-1.jpg",
      imageAlt: "Juan K",
      text: "The food here was very good! I highly recommend trying the lemon dessert."
    },
    {
      rating: "4.1",
      name: "Anita F",
      image: "/images/testimonial-2.jpg",
      imageAlt: "Anita F",
      text: "The service was a little slow but it was worth it."
    },
    {
      rating: "5.0",
      name: "Clarice S",
      image: "/images/testimonial-3.jpg",
      imageAlt: "Clarice S",
      text: "I try to come here at least once a month because it is just that good!"
    },
    {
      rating: "4.7",
      name: "Qi J",
      image: "/images/testimonial-4.jpg",
      imageAlt: "Qi J",
      text: "Nothing says Greek food better than this place. A must try!"
    },
  ];

  return (
    <section id="testimonials" className="container-fluid pb-3">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Testimonials</h1>
        </div>
      </div>
      <div id="testimonials-list" className="d-flex justify-content-between flex-wrap">
        {data.map((testimonial) => <Testimonial rating={testimonial.rating} name={testimonial.name} image={testimonial.image} imageAlt={testimonial.imageAlt} text={testimonial.text}/>)}
      </div>
    </section>
  );
}

export default Testimonials;
