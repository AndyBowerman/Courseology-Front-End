import "./Card.scss";
import Button from "../Button/Button";
import ShortCourseTag from "../ShortCourseTag/ShortCourseTag";
import { Link } from "react-router-dom";

const Card = ({ id, img, title, info, duration, price, shortCourse }) => {
  const formatNumber = (num) => {
    return parseInt(num).toLocaleString();
  };
  return (
    <div className="card">
      <div className="card__container--left">
        <img className="card__img" src={img} alt="" />
      <div className="card__text-container">
        <h2 className="card__title">{title}</h2>
        <p className="card__info">{info}</p>
        {shortCourse &&<ShortCourseTag />}
      </div>
      </div>      
      <div className="card__container--right">
        <p className="card__duration">{duration}</p>
        <p className="card__price">£{formatNumber(price)}</p>
        <Link to={`/course/${id}`}>
          <Button name="card__button" text="More Information" />
        </Link>
      </div>
    </div>
  );
};

export default Card;
