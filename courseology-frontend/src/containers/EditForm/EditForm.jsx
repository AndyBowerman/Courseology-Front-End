import "./EditForm.scss";

const EditForm = ({ course, getUpdatedCourse, submit }) => {

  return (
    <form className="edit-form" onSubmit={submit}>
      <input
        type="text"
        className="edit-form__input"
        value={course.name}
        onChange={(e) => getUpdatedCourse(1, e.target.value)}
        required
      />
      <textarea
        maxLength="230"
        className="edit-form__input"
        value={course.description}
        onChange={(e) => getUpdatedCourse(2, e.target.value)}
      />
      <input
        type="text"
        className="edit-form__input"
        value={course.img}
        onChange={(e) => getUpdatedCourse(3, e.target.value)}
      />
      <input
        type="number"
        className="edit-form__input"
        value={course.duration}
        onChange={(e) => getUpdatedCourse(4, e.target.value)}
        required
      />
      <input
        type="number"
        className="edit-form__input"
        value={course.price}
        onChange={(e) => getUpdatedCourse(5, e.target.value)}
        required
      />
      <button type="submit" className="edit-form__submit">
        Update Course
      </button>
    </form>
  );
};

export default EditForm;
