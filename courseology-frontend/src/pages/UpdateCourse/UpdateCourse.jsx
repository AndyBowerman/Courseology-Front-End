import "./UpdateCourse.scss";
import Layout from "../../components/Layout/Layout";
import { useParams, Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import EditForm from "../../containers/EditForm/EditForm";

const UpdateCourse = () => {
    const { courseId } = useParams();

    const handleSubmit = async (course) => {
        const response = await fetch(`http://localhost:8080/course/${course.id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(course)
        })
    }

  return (
    <Layout heading="Update Course">
        <div className="update-course">
            <EditForm id={courseId} handleSubmit={handleSubmit} />
            <div className="update-course__container">
                <Link to={`/course/${courseId}`}>
                    <Button text="Return to Course" />
                </Link>
                <Link to={`/our-courses`}>
                    <Button text="Return to Course List" />
                </Link>
            </div>
        </div>
    </Layout>
  )
}

export default UpdateCourse