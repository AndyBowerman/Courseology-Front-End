import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AddTeacher from './pages/AddTeacher/AddTeacher';
import CreateCourse from './pages/CreateCourse/CreateCourse';
import Courses from "./pages/Courses/Courses";
import Home from "./pages/Home/Home";
import CourseInformation from "./pages/CourseInformation/CourseInformation";


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
          path="/"
          element={
            <Home />
          }  
        ></Route>
      </Routes>
    </Router>
    // <CourseInformation />
  )
}

export default App;