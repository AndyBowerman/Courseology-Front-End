import "./CourseInformation.scss";
import Layout from "../../components/Layout/Layout";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import CourseDetails from "../../components/CourseDetails/CourseDetails";
import Button from "../../components/Button/Button";

const CourseInformation = () => {
  const [course, setCourse] = useState({});
  const [displayConfirmation, setDisplayConfirmation] = useState(false);
  const [teacher, setTeacher] = useState("");
  const { courseId } = useParams();
  const navigate = useNavigate();

  const getCourse = async () => {
    const response = await fetch(
      `https://andybowerman.com/courseById/${courseId}`
    );
    const courseData = await response.json();
    setCourse(courseData);
  };

  const getTeacher = async () => {
    const response = await fetch(
      `https://andybowerman.com/teachersBySubject/${course.name}`
    );
    const teacherData = await response.json();
    setTeacher(teacherData[0]);
  };

  useEffect(() => {
    getCourse();
  }, []);

  useEffect(() => {
      getTeacher()
  }, [course])

  const toggleDisplayConfirmation = () =>
    setDisplayConfirmation(!displayConfirmation);

  const handleDelete = async () => {
    await fetch(`https://andybowerman.com/course/${courseId}`, {
      method: "DELETE",
    });
    navigate("/our-courses");
    setDisplayConfirmation(!displayConfirmation);
  };

  return (
    <Layout
      heading={course.name}
      displayConfirmation={displayConfirmation}
      message="Are you sure you would like to delete this course?"
      confirmationFunction={handleDelete}
      cancelFunction={toggleDisplayConfirmation}
    >
      <CourseDetails course={course} teacher={teacher ? teacher : false} />
      <div className="course-information__buttons">
        <Link to={`/update-course/${courseId}`}>
          <Button name="button__update" text="Update" />
        </Link>
        <Button
          name="button__delete"
          func={toggleDisplayConfirmation}
          text="Delete"
        ></Button>
        <Link to="/our-courses">
          <Button text="Return to Courses" />
        </Link>
      </div>
    </Layout>
  );
};

export default CourseInformation;
