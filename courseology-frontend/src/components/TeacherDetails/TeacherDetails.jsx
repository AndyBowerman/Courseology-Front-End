import "./TeacherDetails.scss";

const TeacherDetails = ({ subject, background, img, courseId }) => {
  return (
    <div className="teacher-details">
      <img className="teacher-details__img" src={img} alt="Profile Picture" />
      <div className="teacher-details__container">
        <p className="teacher-details__background">{background}</p>
        {courseId && (
          <a
            className="teacher-details__link"
            href={`https://andybowerman.github.io/Courseology-Front-End/#/course/${courseId}`}
          >
            {subject}
          </a>
        )}
      </div>
    </div>
  );
};

export default TeacherDetails;
