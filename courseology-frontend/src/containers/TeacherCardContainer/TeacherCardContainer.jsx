import { useEffect } from "react";
import { useState } from "react";
import TeacherCard from "../../components/TeacherCard/TeacherCard";
import "./TeacherCardContainer.scss";

const TeacherCardContainer = () => {
    const [teachers, setTeachers] = useState([]);

    const getTeachers = async () => {
        const response = await fetch("http://localhost:8080/teachers");
        const teacherData = await response.json();
        setTeachers(teacherData);
    }

    useEffect(() => {
        getTeachers()
    }, []);

    const renderTeachers = teachers.map(item => {
        return <TeacherCard name={item.name} img={item.profilePicture} subject={item.mainSubject} info={item.background} />
    })

  return (
    <div className="teacher-card-container">
       {renderTeachers}
    </div>    
  )
}

export default TeacherCardContainer