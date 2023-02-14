import Card from "../../components/Card/Card";
import "./CardContainer.scss";
import { useState, useEffect } from "react";

const CardContainer = ({searchTerm, filterValue}) => {
  const [courses, setCourses] = useState([]);
  const [unfilteredCourses, setUnfilteredCourses] = useState([]);

  const getCourses = async () => {
    const response = await fetch("http://localhost:5000/courses");
    const coursesData = await response.json();
    setCourses(coursesData);
    setUnfilteredCourses(coursesData);
  };

  useEffect(() => {
    getCourses();
  }, []);

  const cleanDuration = (duration) => {
    if (duration >= 52) {
      return `${Math.round(duration / 52)} years`
    } else {
      return `${duration} weeks`
    }
  }

  const filterCourses = () => {
    const filteredCourses = courses?.filter(course => course.shortCourse);
    if(filterValue) {
      setCourses(filteredCourses);
    } else {
      setCourses(unfilteredCourses)
    }
  }

  const searchCourses = (array) => {
    return array?.filter((course) => course.name.toLowerCase().includes(searchTerm))
  }

  useEffect(() => {
    filterCourses();
  }, [filterValue])

  const renderCards = searchCourses(courses)
  ?.map((course) => {
    return (
      <Card
        key={course.id}
        id={course.id}
        img={course.img}
        title={course.name}
        info={course.description}
        duration={cleanDuration(course.duration)}
        price={course.price}
        shortCourse={course.shortCourse}
      />
    );
  });
  return <div className="card-container">{renderCards}</div>;
};

export default CardContainer;
