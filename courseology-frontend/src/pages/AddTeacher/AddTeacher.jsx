import './AddTeacher.scss';
import Layout from "../../components/Layout/Layout";
import TeacherForm from '../../components/TeacherForm/TeacherForm';

const AddTeacher = () => {
  return (
    <Layout heading="Add A New Teacher">
        <TeacherForm />
    </Layout>
  )
}

export default AddTeacher