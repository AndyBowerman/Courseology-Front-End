import "./TeacherCard.scss";
import Button from "../Button/Button";

const TeacherCard = ({ name, img, subject, info }) => {

  return (
    <div className="teacher-card">
        <img className="teacher-card__img" src={img} alt="Profile Picture" />
        <div className="teacher-card__container">
            <h2 className="teacher-card__name">{name}</h2>
            <h3 className="teacher-card__subject">{subject}</h3>
            <p className="teacher-card__background">{info}</p>
            <Button text="More Information" />
        </div>
    </div>
  )
};

export default TeacherCard;
