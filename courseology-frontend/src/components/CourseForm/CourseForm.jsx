import InputBox from '../InputBox/InputBox';
import Button from '../Button/Button'
import './CourseForm.scss';

const CourseForm = ({createCourse}) => {
  return (
    <form className="course-form" onSubmit={createCourse}>
        <InputBox labelText="Course Name: " inputType="text" inputName="courseName" />
        <InputBox labelText="Description: " inputType="textarea" inputName="courseDescription" />
        <InputBox labelText="Image (URL): " inputType="text" inputName="courseImage" />
        <InputBox labelText="Duration (Weeks): " inputType="number" inputName="courseDuration" />
        <InputBox labelText="Price:" inputType="number" inputName="coursePrice" />
        <div className="course-form__container">
            <Button text="Create New Course"/>
        </div>        
    </form>
  )
}

export default CourseForm