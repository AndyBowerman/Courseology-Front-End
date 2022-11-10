import "./TeacherInformation.scss";
import Layout from "../../components/Layout/Layout";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import TeacherDetails from "../../components/TeacherDetails/TeacherDetails";
import Button from "../../components/Button/Button";

const TeacherInformation = () => {
  const [teacher, setTeacher] = useState({});
  const [course, setCourse] = useState(0);
  const [secondarySubject, setSecondarySubject] = useState(0);
  const { teacherId } = useParams();
  const navigate = useNavigate();

  const getTeacher = async () => {
    const response = await fetch(`http://localhost:8080/teacher/${teacherId}`);
    const teacherData = await response.json();
    setTeacher(teacherData);
  };

  const getMainSubject = async () => {
    const response = await fetch(`http://localhost:8080/courses?courseName=${teacher.mainSubject}`);
    const courseData = await response.json();
    setCourse(courseData[0].id);
  }

  const getSecondarySubject = async () => {
    const response = await fetch(`http://localhost:8080/courses?courseName=${teacher.secondarySubject}`);
    const courseData = await response.json();
    setSecondarySubject(courseData[0].id);
  }

  useEffect(() => {
    getTeacher();
  }, []);

  useEffect(() => {
    getMainSubject();
    getSecondarySubject();
  }, [teacher]);

  const handleDelete = async () => {
    await fetch(`http://localhost:8080/teacher/${teacherId}`, {method: 'DELETE'})
    navigate("/our-teachers");
}

  return (
    <Layout heading={teacher.name}>
      <TeacherDetails
        mainSubject={teacher.mainSubject}
        secondarySubject={teacher.secondarySubject}
        background={teacher.background}
        img={teacher.profilePicture}
        id={course}
        secondId={secondarySubject}
      />
      <div className="teacher-information">
        <Link to={`/update-teacher/${teacherId}`}>
          <Button name="button__update" text="Update" />
        </Link>
        <Button name="button__delete" func={handleDelete} text="Delete" />
        <Link to="/our-teachers">
          <Button text="Return to Our Teachers" />
        </Link>        
      </div>
    </Layout>
  );
};

export default TeacherInformation;
