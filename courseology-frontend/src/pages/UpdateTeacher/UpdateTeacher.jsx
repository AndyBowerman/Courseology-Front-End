import "./UpdateTeacher.scss";
import Layout from "../../components/Layout/Layout";
import EditTeacher from "../../components/EditTeacher/EditTeacher";
import Button from "../../components/Button/Button";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UpdateTeacher = () => {
  const [teacher, setTeacher] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [displayConfirmation, setDisplayConfirmation] = useState(false);
  const navigate = useNavigate();
  const { teacherId } = useParams();

  const getTeacher = async () => {
    const response = await fetch(
      `http://localhost:8080/teacherById/${teacherId}`
    );
    const teacherData = await response.json();
    setTeacher(teacherData);
    setIsLoading(false);
  };

  useEffect(() => {
    getTeacher();
  }, []);

  const toggleDisplayConfirmation = (e) => {
    e.preventDefault();
    setDisplayConfirmation(!displayConfirmation);
  };

  const getUpdatedTeacher = (num, val) => {
    if (num === 1) {
      setTeacher({ ...teacher, name: val });
    } else if (num === 2) {
      setTeacher({ ...teacher, background: val });
    } else if (num === 3) {
      setTeacher({ ...teacher, subject: val });
    } else if (num === 4) {
      setTeacher({ ...teacher, profilePicture: val });
    }
  };

  const handleSubmit = async () => {
    const response = await fetch(`http://localhost:8080/teacher/${teacherId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(teacher),
    });
    setDisplayConfirmation(!displayConfirmation);
    navigate(`/teacher/${teacherId}`);
  };

  return (
    <Layout
      heading="Update Teacher"
      displayConfirmation={displayConfirmation}
      message="Update this teacher's record?"
      confirmationFunction={handleSubmit}
      cancelFunction={toggleDisplayConfirmation}
    >
      {!isLoading && (
        <EditTeacher
          teacher={teacher}
          toggleDisplayConfirmation={toggleDisplayConfirmation}
          getUpdatedTeacher={getUpdatedTeacher}
        />
      )}
      <div className="update-teacher__container">
        <Link to={`/teacher/${teacherId}`}>
          <Button text="Return to Teacher" />
        </Link>
        <Link to={`/our-teachers`}>
          <Button text="Return to Teacher's List" />
        </Link>
      </div>
    </Layout>
  );
};

export default UpdateTeacher;
