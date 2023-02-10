import "./AddTeacher.scss";
import Layout from "../../components/Layout/Layout";
import TeacherForm from "../../components/TeacherForm/TeacherForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTeacher = () => {
  const [newTeacher, setNewTeacher] = useState({});
  const [displayConfirmation, setDisplayConfirmation] = useState(false);
  const navigate = useNavigate();

  const createTeacher = (e) => {
    e.preventDefault();
    setNewTeacher({
      name: e.target.name.value,
      background: e.target.background.value,
      subject: e.target.subject.value,
      profilePicture: e.target.profilePicture.value,
    });
    setDisplayConfirmation(!displayConfirmation);
  };

  const cancelSubmit = () => setDisplayConfirmation(!displayConfirmation);

  const addTeacher = async () => {
      await fetch("http://localhost:8080/teacher", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTeacher),
      });
      navigate("/our-teachers");
    
  };

  return (
    <Layout
      heading="Add A New Teacher"
      displayConfirmation={displayConfirmation}
      message="Add Teacher?"
      confirmationFunction={addTeacher}
      cancelFunction={cancelSubmit}
    >
      <TeacherForm createTeacher={createTeacher} />
    </Layout>
  );
};

export default AddTeacher;
