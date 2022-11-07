import InputBox from '../InputBox/InputBox';
import Button from '../Button/Button';
import './CourseForm.scss';
import TextArea from '../TextArea/TextArea';

const CourseForm = ({createCourse, buttonValue}) => {
  return (
    <form className="course-form" onSubmit={createCourse}>
        <InputBox labelText="Course Name: " inputType="text" inputName="courseName" />
        <TextArea labelText="Description: " inputType="textarea" inputName="courseDescription" />
        <InputBox labelText="Image (URL): " inputType="text" inputName="img"  />
        <InputBox labelText="Duration (Weeks): " inputType="number" inputName="duration" />
        <InputBox labelText="Price (£):" inputType="number" inputName="price" />
        <div className="course-form__container">
            <Button text={buttonValue}/>
        </div>        
    </form>
  )
}

export default CourseForm