import Layout from "../../components/Layout/Layout";
import CourseForm from "../../components/CourseForm/CourseForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateCourse = () => {
  const [newCourse, setNewCourse] = useState({});
  const [displayConfirmation, setDisplayConfirmation] = useState(false);
  const navigate = useNavigate();

  const createCourse = (e) => {
    e.preventDefault();
    setNewCourse({
      img: e.target.img.value,
      name: e.target.courseName.value,
      description: e.target.courseDescription.value,
      duration: e.target.duration.value,
      price: e.target.price.value,
      shortCourse: e.target.duration.value <= 13,
    });
    setDisplayConfirmation(!displayConfirmation);
  };

  const cancelSubmit = () => setDisplayConfirmation(!displayConfirmation);

  const submitCourse = async () => {
      await fetch("https://andybowerman.com/course", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCourse),
      });
    setDisplayConfirmation(!displayConfirmation);
    navigate("/our-courses");
  };

  return (
    <Layout
      heading="Create A New Course"
      displayConfirmation={displayConfirmation}
      message="Create course?"
      confirmationFunction={submitCourse}
      cancelFunction={cancelSubmit}
    >
      <CourseForm createCourse={createCourse} buttonValue="Create New Course" />
    </Layout>
  );
};

export default CreateCourse;
