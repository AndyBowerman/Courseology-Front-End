import "./EditTeacher.scss";

const EditTeacher = ({
  teacher,
  toggleDisplayConfirmation,
  getUpdatedTeacher,
}) => {
  return (
    <form className="edit-teacher" onSubmit={toggleDisplayConfirmation}>
      <input
        type="text"
        className="edit-teacher__input"
        value={teacher.name}
        onChange={(e) => getUpdatedTeacher(1, e.target.value)}
      />
      <textarea
        maxLength="230"
        className="edit-teacher__input"
        value={teacher.background}
        onChange={(e) => getUpdatedTeacher(2, e.target.value)}
      />
      <input
        type="text"
        className="edit-teacher__input"
        value={teacher.subject}
        onChange={(e) => getUpdatedTeacher(3, e.target.value)}
      />
      <input
        type="text"
        className="edit-teacher__input"
        value={teacher.profilePicture}
        onChange={(e) => getUpdatedTeacher(4, e.target.value)}
      />
      <button type="submit" className="edit-teacher__submit">
        Update Teacher
      </button>
    </form>
  );
};

export default EditTeacher;
