import "./TeacherCard.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const TeacherCard = ({ name, img, subject, info, id }) => {

  return (
    <div className="teacher-card">
        <img className="teacher-card__img" src={img} alt="Profile Picture" />
        <div className="teacher-card__container">
            <h2 className="teacher-card__name">{name}</h2>
            <h3 className="teacher-card__subject">{subject}</h3>
            <p className="teacher-card__background">{info}</p>
            <Link to={`/teacher/${id}`}>
              <Button text="View profile" />
            </Link>              
        </div>
    </div>
  )
};

export default TeacherCard;
