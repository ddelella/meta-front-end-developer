import './Special.css';

function Special(props) {
  return (
    <article className="card special">
      <img src={props.image} className="card-img-top" alt={props.imageAlt}/>
      <div className="card-body">
        <div className="row">
          <div className="col-lg-8 col-md-7 col-sm-6">
            <h5 className="card-title">{props.title}</h5>
          </div>
          <div className="col-lg-4 col-md-5 col-sm-6 price">
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

export default Special;
