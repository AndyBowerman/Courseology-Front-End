import "./UpdateCourse.scss";
import Layout from "../../components/Layout/Layout";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import EditForm from "../../containers/EditForm/EditForm";

const UpdateCourse = () => {
    const [course, setCourse] = useState({});
    const [updatedCourse, setUpdatedCourse] = useState({});

    const { courseId } = useParams();
    const navigate = useNavigate();

    const getCourse = async () => {
        const response = await fetch(`http://localhost:8080/course/${courseId}`)
        const courseData = await response.json();
        setCourse(courseData);
    }

    useEffect(() => {
        getCourse();
    }, []);

    // const updateCourse = (e) => {
    //     e.preventDefault();
    //     setUpdatedCourse({
    //         img: e.target.img.value,
    //         courseName: e.target.courseName.value,
    //         courseDescription: e.target.courseDescription.value,
    //         duration: e.target.duration.value,
    //         price: e.target.price.value,
    //         shortCourse: e.target.duration.value <= 13 
    //     })
    // }

    // const handleUpdateCourse = async updateCourse => {
    //     const response = await fetch(`http://localhost:8080/course/${courseId}`, {
    //         method: 'PUT',
    //         headers: {
    //           'Accept': 'application/json',
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(updatedCourse)
    //       });
    //       setCourse(updatedCourse);
    // }

    // useEffect(() => {
    //     handleUpdateCourse();
    // }, [updatedCourse]);

  return (
    <Layout heading={course.courseName}>
        <EditForm course={course} />       
        <div className="update-course__container">
            <Link to={`/course/${courseId}`}>
                <Button text={`Return to ${course.courseName}`} />
            </Link>
            <Link to="/our-courses">
                <Button text="View All Courses" />
            </Link>            
        </div>
    </Layout>
  )
}

export default UpdateCourse