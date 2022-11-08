import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AddTeacher from './pages/AddTeacher/AddTeacher';
import CreateCourse from './pages/CreateCourse/CreateCourse';
import Courses from "./pages/Courses/Courses";
import Home from "./pages/Home/Home";
import CourseInformation from "./pages/CourseInformation/CourseInformation";
import UpdateCourse from './pages/UpdateCourse/UpdateCourse';
import OurTeachers from './pages/OurTeachers/OurTeachers';
import TeacherInformation from "./pages/TeacherInformation/TeacherInformation";
import UpdateTeacher from './pages/UpdateTeacher/UpdateTeacher';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/our-courses"
          element={
            <Courses />
          }
        ></Route>
        <Route
          path="/create-a-course"
          element={
            <CreateCourse />
          }
        ></Route>
        <Route
          path="/add-a-teacher"
          element={
            <AddTeacher />
          }
        ></Route>
        <Route
          path="/course/:courseId"
          element={
            <CourseInformation />
          }
        ></Route>
        <Route
          path="/update-course/:courseId"
          element={
            <UpdateCourse />
          }
        ></Route>
        <Route
          path="/our-teachers"
          element={
            <OurTeachers />
          }
        ></Route>
        <Route
          path="/teacher/:teacherId"
          element={
            <TeacherInformation />
          }
        ></Route>
        <Route
          path="/update-teacher/:teacherId"
          element={
            <UpdateTeacher />
          }
        ></Route>
        <Route
          path="/"
          element={
            <Home />
          }  
        ></Route>
      </Routes>
    </Router>
  )
}

export default App;