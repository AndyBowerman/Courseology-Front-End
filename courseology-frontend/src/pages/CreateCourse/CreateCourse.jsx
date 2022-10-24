import "./CreateCourse.scss";
import Layout from "../../components/Layout/Layout";
import CourseForm from "../../components/CourseForm/CourseForm";
import { useState } from "react";

const CreateCourse = () => {
    
    const [newCourse, setNewCourse] = useState({});
    
    const createCourse = (e) => {
        e.preventDefault();
        setNewCourse({
            img: e.target.courseImage.value,
            courseName: e.target.courseName.value,
            courseDescription: e.target.courseDescription.value,
            duration: e.target.courseDuration.value,
            price: e.target.coursePrice.value,
            shortCourse: e.target.courseDuration.value <= 13 
        })
        submitCourse(newCourse);
    }

    const submitCourse = async course => {
        await fetch("http://localhost:8080/course", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newCourse)
        })
    }

  return (
    <Layout heading="Create A New Course">
        <CourseForm createCourse={createCourse} />
    </Layout>
  )
}

export default CreateCourse