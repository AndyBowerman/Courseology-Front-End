import Card from "../../components/Card/Card";
import "./CardContainer.scss";
import { useState, useEffect } from "react";

const CardContainer = () => {
  const [courseData, setCourseData] = useState([])

  const getCourses = async course => {
    const response = await fetch("http://localhost:8080/courses");
    const coursesData = await response.json();
    setCourseData(coursesData);
  }

  useEffect(() => {
    getCourses()
  }, []);

    const renderCards = courseData?.map((course) => {
        return (
            <Card 
                key={course.id}
                img={course.img}
                title={course.courseName}
                info={course.courseDescription}
                duration={course.duration}
                price={course.price}
            />
        )
        
    })
  return (
    <div className="card-container">{renderCards}</div>
  )
}

export default CardContainer