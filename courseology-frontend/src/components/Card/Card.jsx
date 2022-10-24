import "./Card.scss";
import Button from "../Button/Button";
import ShortCourseTag from "../ShortCourseTag/ShortCourseTag";

const Card = ({ img, title, info, duration, price, shortCourse }) => {
  return (
    <div className="card">
      <img className="card__img" src={img} alt="" />
      <div className="card__text-container">
        <h2 className="card__title">{title}</h2>
        <p className="card__info">{info}</p>
        {shortCourse &&<ShortCourseTag />}
      </div>
      <div className="card__tag-container">
        <p className="card__duration">{duration}</p>
        <p className="card__price">{price}</p>
        <Button text="More Information" />
      </div>
    </div>
  );
};

export default Card;
