import "./EditTeacher.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EditTeacher = ({ id, handleSubmit }) => {
  const [teacher, setTeacher] = useState({});
  const navigate = useNavigate();

  const getTeacher = async (id) => {
    const response = await fetch(`http://localhost:8080/teacher/${id}`);
    const teacherData = await response.json();
    setTeacher(teacherData);
  };

  useEffect(() => {
    getTeacher(id);
  }, [id]);

  const updateTeacher = (e) => {
    e.preventDefault();
    handleSubmit(teacher);
    navigate(`/teacher/${id}`);
  };

  return (
    <form className="edit-teacher" onSubmit={updateTeacher}>
      <input
        type="text"
        className="edit-teacher__input"
        value={teacher.name}
        onInput={(e) => setTeacher({ ...teacher, name: e.target.value })}
      />
      <textarea
        className="edit-teacher__input"
        value={teacher.background}
        onInput={(e) => setTeacher({ ...teacher, background: e.target.value })}
      />
      <input
        type="text"
        className="edit-teacher__input"
        value={teacher.mainSubject}
        onInput={(e) => setTeacher({ ...teacher, mainSubject: e.target.value })}
      />
      <input
        type="text"
        className="edit-teacher__input"
        value={teacher.secondarySubject}
        onInput={(e) =>
          setTeacher({ ...teacher, secondarySubject: e.target.value })
        }
      />
      <input
        type="text"
        className="edit-teacher__input"
        value={teacher.profilePicture}
        onInput={(e) =>
          setTeacher({ ...teacher, profilePicture: e.target.value })
        }
      />
      <button type="submit" className="edit-teacher__submit">
        Update Teacher
      </button>
    </form>
  );
};

export default EditTeacher;
