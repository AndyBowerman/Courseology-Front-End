import { useEffect } from "react";
import { useState } from "react";
import TeacherCard from "../../components/TeacherCard/TeacherCard";
import "./TeacherCardContainer.scss";

const TeacherCardContainer = () => {
    const [teachers, setTeachers] = useState([]);

    const getTeachers = async () => {
        const response = await fetch("https://andybowerman.com/teachers");
        const teacherData = await response.json();
        setTeachers(teacherData);
    }

    useEffect(() => {
        getTeachers()
    }, []);

    const renderTeachers = teachers.map(teacher => {
        return <TeacherCard key={teacher.id} id={teacher.id} name={teacher.name} img={teacher.profilePicture} subject={teacher.mainSubject} info={teacher.background} />
    })

  return (
    <div className="teacher-card-container">
       {renderTeachers}
    </div>    
  )
}

export default TeacherCardContainer