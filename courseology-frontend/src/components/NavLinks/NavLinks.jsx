import "./NavLinks.scss";
import { Link } from "react-router-dom";

const NavLinks = ({ name }) => {
  return (
    <ul className="nav-links">
      <Link to="/" className="nav-links__link">
        <li className="nav-links__item">Home</li>
      </Link>
      <Link to="/our-courses" className="nav-links__link">
        <li className="nav-links__item">Our Courses</li>
      </Link>
      <Link to="/our-teachers" className="nav-links__link">
        <li className="nav-links__item">Our Teachers</li>
      </Link>
      <Link to="/create-a-course" className="nav-links__link">
        <li className="nav-links__item">Create a Course</li>
      </Link>
      <Link to="/add-a-teacher" className="nav-links__link">
        <li className="nav-links__item">Add a Teacher</li>
      </Link>
    </ul>
  )
}

export default NavLinks