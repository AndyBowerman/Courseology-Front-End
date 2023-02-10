import "./TeacherForm.scss";
import InputBox from '../InputBox/InputBox';
import Button from '../Button/Button';
import TextArea from "../TextArea/TextArea";

const TeacherForm = ({ createTeacher }) => {
  return (
    <form className="teacher-form" onSubmit={createTeacher}>
        <InputBox labelText="Teacher Name: " inputType="text" inputName="name" />
        <TextArea labelText="Background Information: " inputType="text" inputName="background" />
        <InputBox labelText="Image (URL): " inputType="text" inputName="profilePicture" />
        <InputBox labelText="Subject: " inputType="text" inputName="subject" />
        <div className="teacher-form__container">
            <Button type="submit" text="Add New Teacher"/>
        </div> 
    </form>
  )
}

export default TeacherForm