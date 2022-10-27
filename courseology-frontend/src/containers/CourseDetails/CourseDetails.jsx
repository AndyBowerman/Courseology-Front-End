import ShortCourseTag from "../../components/ShortCourseTag/ShortCourseTag";
import "./CourseDetails.scss";

const CourseDetails = ({ courseInfo }) => {
  const { courseDescription, duration, img, price, shortCourse } = courseInfo;

  const cleanDuration = (duration) => {
    if (duration >= 52) {
      return `${duration / 52} years`;
    } else {
      return `${duration} weeks`;
    }
  };

  return (
    <div className="course-details">
      <img src={img} alt="Course" className="course-details__img" />
      <div className="course-details__container">
        {shortCourse && <ShortCourseTag />}
        <p className="course-details__description">{courseDescription}</p>
        <p className="course-details__description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
          corrupti ullam eos incidunt atque blanditiis mollitia aspernatur
          reiciendis fugiat enim labore libero itaque, sint quaerat cupiditate
          maxime eius accusamus. Harum.
        </p>
        <p className="course-details__points">Price: £{price}</p>
        <br />
        <p className="course-details__points">Duration: {cleanDuration(duration)}</p>
      </div>
    </div>
  );
};

export default CourseDetails;
