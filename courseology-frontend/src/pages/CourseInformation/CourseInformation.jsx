import "./CourseInformation.scss";
import Layout from "../../components/Layout/Layout";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import CourseDetails from "../../containers/CourseDetails/CourseDetails";
import Button from "../../components/Button/Button";
import TeacherCard from "../../components/TeacherCard/TeacherCard";

const CourseInformation = () => {
    const [course, setCourse] = useState("");
    const [teacher, setTeacher] = useState("");
    const { courseId } = useParams();
    const navigate = useNavigate();

    const getCourse = async () => {
        const response = await fetch(`http://localhost:8080/course/${courseId}`)
        const courseData = await response.json();
        setCourse(courseData);
    }

    const getTeacher = async () => {
        const response = await fetch(`http://localhost:8080/find/teachers?mainSubject=${course.courseName}`);
        const teacherData = await response.json();
        setTeacher(teacherData[0]);
    }

    useEffect(() => {
        getCourse();
    }, [])

    useEffect(() => {
        getTeacher();
    }, [course])

    const handleDelete = async () => {
        await fetch(`http://localhost:8080/course/${courseId}`, {method: 'DELETE'})
        navigate("/our-courses");
    }

  return (
    <Layout heading={course.courseName}>
            <CourseDetails courseInfo={course} />
            <div className="course-information">
                <h3 className="course-information__title">Course Leader</h3>
                {teacher && <TeacherCard key={teacher.id} id={teacher.id} name={teacher.name} img={teacher.profilePicture} subject={teacher.mainSubject} info={teacher.background} />}
            </div>
            <div className="course-information__buttons">
                <Link to={`/update-course/${courseId}`}>
                    <Button name="button__update" text="Update"/>
                </Link>                
                <Button name="button__delete" func={handleDelete} text="Delete"></Button>
                <Link to="/our-courses">
                    <Button text="Return to Courses" />
                </Link>
            </div>
    </Layout>
  )
}

export default CourseInformation