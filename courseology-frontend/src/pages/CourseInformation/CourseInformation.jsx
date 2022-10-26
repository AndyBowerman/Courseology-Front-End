import "./CourseInformation.scss";
import Layout from "../../components/Layout/Layout";
import { useState, useEffect } from "react";

const CourseInformation = () => {
    const [course, setCourse] = useState("")
  return (
    <Layout heading="Course Name"/>
  )
}

export default CourseInformation