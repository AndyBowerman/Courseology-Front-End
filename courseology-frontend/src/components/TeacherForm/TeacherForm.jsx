import "./TeacherForm.scss";
import InputBox from '../InputBox/InputBox';
import Button from '../Button/Button';
import TextArea from "../TextArea/TextArea";

const TeacherForm = () => {
  return (
    <form className="teacher-form">
        <InputBox labelText="Teacher Name: " inputType="text" inputName="name" />
        <TextArea labelText="Background Information: " inputType="text" inputName="background" />
        <InputBox labelText="Image (URL): " inputType="text" inputName="profilePicture" />
        <InputBox labelText="Lead Subject: " inputType="text" inputName="mainSubject" />
        <InputBox labelText="Support Subjects:" inputType="text" inputName="secondarySubject" />
        <div className="teacher-form__container">
            <Button text="Add New Teacher"/>
        </div> 
    </form>
  )
}

export default TeacherForm