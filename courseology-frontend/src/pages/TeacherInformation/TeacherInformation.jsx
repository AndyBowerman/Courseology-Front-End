import "./TeacherInformation.scss";
import Layout from "../../components/Layout/Layout";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import TeacherDetails from "../../components/TeacherDetails/TeacherDetails";
import Button from "../../components/Button/Button";

const TeacherInformation = () => {
  const [teacher, setTeacher] = useState({});
  const { teacherId } = useParams();
  const navigate = useNavigate();

  const getTeacher = async () => {
    const response = await fetch(`http://localhost:8080/teacher/${teacherId}`);
    const teacherData = await response.json();
    setTeacher(teacherData);
  };

  useEffect(() => {
    getTeacher();
  }, []);

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
      />
      <div className="teacher-information">
        <Button text="Update" />
        <Button func={handleDelete} text="Delete" />
        <Link to="/our-teachers">
            <Button text="Return to Our Teachers" />
        </Link>        
      </div>
    </Layout>
  );
};

export default TeacherInformation;
