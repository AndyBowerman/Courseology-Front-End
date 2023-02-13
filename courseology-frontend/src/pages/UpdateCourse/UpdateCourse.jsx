import "./UpdateCourse.scss";
import Layout from "../../components/Layout/Layout";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import EditForm from "../../components/EditForm/EditForm";

const UpdateCourse = () => {
  const [displayConfirmation, setDisplayConfirmation] = useState(false);
  const [course, setCourse] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { courseId } = useParams();

  const getCourse = async () => {
    const response = await fetch(
      `http://localhost:8080/courseById/${courseId}`
    );
    const courseData = await response.json();
    setCourse(courseData);
    setIsLoading(false);
  };

  useEffect(() => {
    getCourse();
  }, []);

  const getUpdatedCourse = (num, val) => {
    if (num === 1) {
      setCourse({ ...course, name: val });
    } else if (num === 2) {
      setCourse({ ...course, description: val });
    } else if (num === 3) {
      setCourse({ ...course, img: val });
    } else if (num === 4) {
      setCourse({ ...course, duration: val, shortCourse: val < 13 });
    } else if (num === 5) {
      setCourse({ ...course, price: val });
    }
  };

  const toggleConfirmation = (e) => {
    e.preventDefault();
    setDisplayConfirmation(!displayConfirmation);
  };

  const handleSubmit = async () => {
    const response = await fetch(`http://localhost:8080/course/${courseId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(course),
    });
    setDisplayConfirmation(!displayConfirmation)
    navigate(`/course/${courseId}`)
  };

  return (
    <Layout
      heading="Update Course"
      displayConfirmation={displayConfirmation}
      message="Update course?"
      confirmationFunction={handleSubmit}
      cancelFunction={toggleConfirmation}
    >
      <div className="update-course">
        {!isLoading && (
          <EditForm
            course={course}
            getUpdatedCourse={getUpdatedCourse}
            submit={toggleConfirmation}
          />
        )}
        <div className="update-course__container">
          <Link to={`/course/${courseId}`}>
            <Button text="Return to Course" />
          </Link>
          <Link to={`/our-courses`}>
            <Button text="Return to Course List" />
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default UpdateCourse;
