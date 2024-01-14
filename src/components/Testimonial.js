import './Testimonial.css';

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

export default Testimonial;
