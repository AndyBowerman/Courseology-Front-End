import "./Card.scss";

const Card = ({img, title, info, duration, price}) => {
  return (
    <div className="card">
        <img className="card__img" src={img} alt="" />
        <h2 className="card__title">{title}</h2>
        <p className="card__info">{info}</p>
        <div className="card__container">
          <p className="card__duration">{duration}</p>
          <p className="card__price">{price}</p>
        </div>
    </div>
  )
}

export default Card