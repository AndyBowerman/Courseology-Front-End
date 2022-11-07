import "./EditForm.scss";
import { useState } from "react";

const EditForm = ({course}) => {
    const [updatedCourse, setUpdatedCourse] = useState({
      img: "",
      courseName: "",
      courseDescription: "",
      duration: "",
      price: "",
      shortCourse: false
    });

    const handleValidation = () => {

    }


  return (
    <form className="edit-form">
        <input type="text" className="edit-form__input" value={course.courseName} placeholder="Course Name" onInput={e => setUpdatedCourse({...updatedCourse, courseName: e.target.value})}/>
        <textarea className="edit-form__text" value={course.courseDescription}/>
        <input type="text" className="edit-form__input" value={course.img}/>
        <input type="number" className="edit-form__input" value={course.duration}/>
        <input type="number" className="edit-form__input" value={course.price}/>
        <button type="submit" className="edit-form__submit">Update Course</button>
    </form>
  )
}

export default EditForm