import "./AddTeacher.scss";
import Layout from "../../components/Layout/Layout";
import TeacherForm from "../../components/TeacherForm/TeacherForm";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTeacher = () => {
  const [newTeacher, setNewTeacher] = useState({});
  const navigate = useNavigate();

  const createTeacher = (e) => {
    e.preventDefault();
    setNewTeacher({
      name: e.target.name.value,
      background: e.target.background.value,
      mainSubject: e.target.mainSubject.value,
      secondarySubject: e.target.secondarySubject.value,
      profilePicture: e.target.profilePicture.value,
    });
  };

  const addTeacher = async () => {
    const arr = Object.values(newTeacher);
    if (arr.some((value) => value)) {
      await fetch("http://localhost:8080/teacher", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTeacher),
      });
      navigate("/our-teachers");
    }
  };

  useEffect(() => {
    addTeacher();
  }, [newTeacher]);

  return (
    <Layout heading="Add A New Teacher">
      <TeacherForm createTeacher={createTeacher} />
    </Layout>
  );
};

export default AddTeacher;
