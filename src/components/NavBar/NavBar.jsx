import "./NavBar.scss";

const NavBar = ({styles, itemStyle}) => {
  return (
    <ul className={styles}>
        <li className={itemStyle}>Home</li>
        <li className={itemStyle}>Courses</li>
        <li className={itemStyle}>Create Course</li>
        <li className={itemStyle}>Create Student</li>
        <li className={itemStyle}>About Us</li>
    </ul>
  )
}

export default NavBar