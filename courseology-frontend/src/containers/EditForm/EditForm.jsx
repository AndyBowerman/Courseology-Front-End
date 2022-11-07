import "./EditForm.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EditForm = ({ id, handleSubmit }) => {
  const [course, setCourse] = useState({});  
  const navigate = useNavigate();

  const getCourse = async (id) => {
    const response = await fetch(`http://localhost:8080/course/${id}`);
    const courseData = await response.json();
    setCourse(courseData);
  };

  useEffect(() => {
    getCourse(id);
  }, [id]);

  const setDuration = (event) => {
    if (event.target.value < 13) {
      setCourse({ ...course, duration: event.target.value, shortCourse: true });
    } else {
      setCourse({
        ...course,
        duration: event.target.value,
        shortCourse: false,
      });
    }
  };

  const updateCourse = (e) => {
    e.preventDefault();
    handleSubmit(course);
    navigate(`/course/${id}`)
  };

  return (
    <form className="edit-form" onSubmit={updateCourse}>
      <input
        type="text"
        className="edit-form__input"
        value={course.courseName}
        onInput={(event) =>
          setCourse({ ...course, courseName: event.target.value })
        }
      />
      <textarea
        className="edit-form__input"
        value={course.courseDescription}
        onInput={(event) =>
          setCourse({ ...course, courseDescription: event.target.value })
        }
      />
      <input
        type="text"
        className="edit-form__input"
        value={course.img}
        onInput={(event) => setCourse({ ...course, img: event.target.value })}
      />
      <input
        type="number"
        className="edit-form__input"
        value={course.duration}
        onInput={setDuration}
      />
      <input
        type="number"
        className="edit-form__input"
        value={course.price}
        onInput={(event) => setCourse({ ...course, price: event.target.value })}
      />
      <button type="submit" className="edit-form__submit">
        Update Course
      </button>
    </form>
  );
};

export default EditForm;
