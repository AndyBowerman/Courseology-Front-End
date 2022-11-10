import "./TeacherDetails.scss";

const TeacherDetails = ({ mainSubject, secondarySubject, background, img, id, secondId }) => {
  return (
    <div className="teacher-details">
      <img className="teacher-details__img" src={img} alt="Profile Picture" />
      <div className="teacher-details__container">
        <p className="teacher-details__background">{background}</p>
        <p className="teacher-details__subject">
          Main Subject:{" "}
          <a className="teacher-details__link" href={`http://localhost:3000/course/${id}`}>
            {mainSubject}
          </a>
        </p>
        <p className="teacher-details__subject">
          Support Subject:{" "}
          <a className="teacher-details__link" href={`http://localhost:3000/course/${secondId}`}>
            {secondarySubject}
          </a>
        </p>
      </div>
    </div>
  );
};

export default TeacherDetails;
