import Card from "../../components/Card/Card";
import "./CardContainer.scss";
import { useState, useEffect } from "react";

const CardContainer = ({searchTerm, filterValue}) => {
  const [courseData, setCourseData] = useState([]);

  const getCourses = async course => {
    const response = await fetch("http://localhost:8080/courses");
    const coursesData = await response.json();
    setCourseData(coursesData);
  };

  useEffect(() => {
    getCourses();
  }, []);

  const cleanPrice = (price) => {
    let arr = price.toString().split("");
    if (arr.length > 3) {
      arr.splice(arr.length - 3, 0, ",");
    }
    arr.unshift("£");
    return arr.join("");
  };

  const cleanDuration = (duration) => {
    if (duration >= 52) {
      return `${duration / 52} years`
    } else {
      return `${duration} weeks`
    }
  }

  const renderCards = courseData
  .map((course) => {
    return (
      <Card
        key={course.id}
        id={course.id}
        img={course.img}
        title={course.courseName}
        info={course.courseDescription}
        duration={cleanDuration(course.duration)}
        price={cleanPrice(course.price)}
        shortCourse={course.shortCourse}
      />
    );
  });
  return <div className="card-container">{renderCards}</div>;
};

export default CardContainer;
