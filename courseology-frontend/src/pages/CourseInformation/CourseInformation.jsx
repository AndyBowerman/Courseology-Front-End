import "./CourseInformation.scss";
import Layout from "../../components/Layout/Layout";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import CourseDetails from "../../containers/CourseDetails/CourseDetails";
import Button from "../../components/Button/Button";
import TeacherCard from "../../components/TeacherCard/TeacherCard";

const CourseInformation = () => {
  const [course, setCourse] = useState("");
  const [displayConfirmation, setDisplayConfirmation] = useState(false);
  const [teacher, setTeacher] = useState("");
  const { courseId } = useParams();
  const navigate = useNavigate();

  const getCourse = async () => {
    const response = await fetch(
      `http://localhost:8080/courseById/${courseId}`
    );
    const courseData = await response.json();
    setCourse(courseData);
  };

  const getTeacher = async () => {
    const response = await fetch(
      `http://localhost:8080/teachersBySubject/${course.name}`
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
    await fetch(`http://localhost:8080/course/${courseId}`, {
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
      <CourseDetails course={course} />
      <div className="course-information__teacher">
        <h3 className="course-information__header">Course Leader</h3>
        {teacher && <TeacherCard name={teacher.name} img={teacher.profilePicture} subject={teacher.subject} inf={teacher.background} id={teacher.id} />}
      </div>
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
