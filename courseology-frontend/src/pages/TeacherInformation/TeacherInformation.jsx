import "./TeacherInformation.scss";
import Layout from "../../components/Layout/Layout";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import TeacherDetails from "../../components/TeacherDetails/TeacherDetails";
import Button from "../../components/Button/Button";

const TeacherInformation = () => {
  const [teacher, setTeacher] = useState({});
  const [course, setCourse] = useState({});
  const [displayConfirmation, setDisplayConfirmation] = useState(false);
  const { teacherId } = useParams();
  const navigate = useNavigate();

  const getTeacher = async () => {
    const response = await fetch(
      `https://andybowerman.com/teacherById/${teacherId}`
    );
    const teacherData = await response.json();
    setTeacher(teacherData);
  };

  useEffect(() => {
    getTeacher();
  }, []);

  const getCourse = async () => {
    const response = await fetch(
      `https://andybowerman.com/courseByName/${teacher.subject}`
    );
    const courseData = await response.json();
    setCourse(courseData);
  };

  useEffect(() => {
    getCourse();
  }, [teacher]);

  const toggleDisplayConfirmation = () =>
    setDisplayConfirmation(!displayConfirmation);

  const handleDelete = async () => {
    await fetch(`https://andybowerman.com/teacher/${teacherId}`, {
      method: "DELETE",
    });
    navigate("/our-teachers");
  };

  return (
    <Layout
      heading={teacher.name}
      displayConfirmation={displayConfirmation}
      message="Are you sure you want to remove this teacher's record?"
      confirmationFunction={handleDelete}
      cancelFunction={toggleDisplayConfirmation}
    >
      <TeacherDetails
        subject={teacher.subject}
        secondarySubject={teacher.secondarySubject}
        background={teacher.background}
        img={teacher.profilePicture}
        courseId={course.id}
      />
      <div className="teacher-information">
        <Link to={`/update-teacher/${teacherId}`}>
          <Button name="button__update" text="Update" />
        </Link>
        <Button
          name="button__delete"
          func={toggleDisplayConfirmation}
          text="Delete"
        />
        <Link to="/our-teachers">
          <Button text="Return to Our Teachers" />
        </Link>
      </div>
    </Layout>
  );
};

export default TeacherInformation;
