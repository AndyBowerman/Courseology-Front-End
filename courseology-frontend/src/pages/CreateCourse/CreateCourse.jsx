import "./CreateCourse.scss";
import Layout from "../../components/Layout/Layout";
import CourseForm from "../../components/CourseForm/CourseForm";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateCourse = () => {
    
    const [newCourse, setNewCourse] = useState({});
    const navigate = useNavigate();
    
    const createCourse = (e) => {
        e.preventDefault();
        setNewCourse({
            img: e.target.img.value,
            courseName: e.target.courseName.value,
            courseDescription: e.target.courseDescription.value,
            duration: e.target.duration.value,
            price: e.target.price.value,
            shortCourse: e.target.duration.value <= 13 
        })
    }

    const submitCourse = async () => {
        const arr = Object.values(newCourse);
        arr.pop();
        if(arr.some(value => value)) {
            await fetch("http://localhost:8080/course", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newCourse)
            })
            navigate("/our-courses");
        }
    }

    useEffect(() => {
        submitCourse();
    }, [newCourse]);

  return (
    <Layout heading="Create A New Course">
        <CourseForm createCourse={createCourse} buttonValue="Create New Course" />
    </Layout>
  )
}

export default CreateCourse