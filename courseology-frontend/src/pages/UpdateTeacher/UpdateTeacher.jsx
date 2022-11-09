import "./UpdateTeacher.scss";
import Layout from "../../components/Layout/Layout";
import EditTeacher from "../../components/EditTeacher/EditTeacher";
import Button from "../../components/Button/Button";
import { useParams, Link } from "react-router-dom";

const UpdateTeacher = () => {
  const { teacherId } = useParams();

  const handleSubmit = async (teacher) => {
    const response = await fetch(`http://localhost:8080/teacher/${teacher.id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(teacher),
    });
  };

  return (
    <Layout heading="Update Teacher">
      <EditTeacher id={teacherId} handleSubmit={handleSubmit} />
      <div className="update-course__container">
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
