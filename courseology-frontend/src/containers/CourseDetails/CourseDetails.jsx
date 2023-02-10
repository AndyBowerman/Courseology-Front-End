import ShortCourseTag from "../../components/ShortCourseTag/ShortCourseTag";
import "./CourseDetails.scss";

const CourseDetails = ({ course }) => {
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
        <img src={img} alt="Course" className="course-details__img" />
      <div className="course-details__container">
        {shortCourse && <ShortCourseTag />}
        <p className="course-details__description">{description}</p>
        <p className="course-details__points">Price: £{formatNumber(price)}</p>
        <br />
        <p className="course-details__points">
          Duration: {cleanDuration(duration)}
        </p>
      </div>
    </div>
  );
};

export default CourseDetails;
