import Layout from "../../components/Layout/Layout";
import TeacherCardContainer from "../../containers/TeacherCardContainer/TeacherCardContainer";
import "./OurTeachers.scss";

const OurTeachers = () => {
  return (
    <Layout heading="Our Teachers">
        <TeacherCardContainer />
    </Layout>
  )
}

export default OurTeachers