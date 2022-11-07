import "./CourseInformation.scss";
import Layout from "../../components/Layout/Layout";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import CourseDetails from "../../containers/CourseDetails/CourseDetails";
import Button from "../../components/Button/Button";

const CourseInformation = () => {
    const [course, setCourse] = useState("")
    const { courseId } = useParams();
    const navigate = useNavigate();

    const getCourse = async () => {
        const response = await fetch(`http://localhost:8080/course/${courseId}`)
        const courseData = await response.json();
        setCourse(courseData);
    }

    useEffect(() => {
        getCourse();
    }, [])

    const handleDelete = async () => {
        await fetch(`http://localhost:8080/course/${courseId}`, {method: 'DELETE'})
        navigate("/our-courses");
    }

  return (
    <Layout heading={course.courseName}>
            <CourseDetails courseInfo={course} />
            <div className="course-information">
                Teacher Card
            </div>
            <div className="course-information__buttons">
                <Link to={`/update-course/${courseId}`}>
                    <Button text="Update"/>
                </Link>                
                <Button func={handleDelete} text="Delete"></Button>
                <Link to="/our-courses">
                    <Button text="Return to Courses" />
                </Link>
            </div>
    </Layout>
  )
}

export default CourseInformation