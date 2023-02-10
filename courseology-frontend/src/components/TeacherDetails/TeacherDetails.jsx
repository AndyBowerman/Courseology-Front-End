import "./TeacherDetails.scss";

const TeacherDetails = ({ subject, background, img, courseId }) => {
  return (
    <div className="teacher-details">
      <img className="teacher-details__img" src={img} alt="Profile Picture" />
      <div className="teacher-details__container">
        <p className="teacher-details__background">{background}</p>
        <p className="teacher-details__subject">
          Main Subject:{" "}
          <a
            className="teacher-details__link"
            href={`http://localhost:3000/course/${courseId}`}
          >
            {subject}
          </a>
        </p>
      </div>
    </div>
  );
};

export default TeacherDetails;
