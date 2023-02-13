import { Link } from "react-router-dom";
import ShortCourseTag from "../ShortCourseTag/ShortCourseTag";
import "./CourseDetails.scss";

const CourseDetails = ({ course, teacher }) => {
  const { description, duration, img, price, shortCourse } = course;

  const formatNumber = (num) => {
    return parseInt(num).toLocaleString();
  };

  const cleanDuration = (duration) => {
    if (duration >= 52) {
      return `${Math.round(duration / 52)} years`;
    } else {
      return `${duration} weeks`;
    }
  };

  return (
    <div className="course-details">
      <img src={img} alt={course.title} className="course-details__img" />
      <div className="course-details__container">
        {shortCourse && <ShortCourseTag />}
        <p className="course-details__description">{description}</p>
        <div className="course-details__container--text">
          <p className="course-details__points">
            Price: £{formatNumber(price)}
          </p>
          <p className="course-details__points">
            Duration: {cleanDuration(duration)}
          </p>
        </div>
        {teacher && (
          <>
            <h3 className="course-details__header">Course Leader</h3>
            <div className="course-details__teacher">
              <p className="course-details__name">{teacher.name}</p>
              <Link
                className="course-details__link"
                to={`/teacher/${teacher.id}`}
              >
                Visit Profile
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CourseDetails;
