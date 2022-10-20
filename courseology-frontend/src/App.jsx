import './App.scss';
import CardContainer from "./containers/CardContainer/CardContainer.jsx"
import img from "./assets/maxresdefault.jpg";

const App = () => {

  const obj = [
    {img: img, title: "Course 1", info: "fhbved fkjvhbdifvb uhfvid udvivf", duration: "6 months", price: "£1000"},
    {img: img, title: "Course 1", info: "fhbved fkjvhbdifvb uhfvid udvivf", duration: "6 months", price: "£1000"},
    {img: img, title: "Course 1", info: "fhbved fkjvhbdifvb uhfvid udvivf", duration: "6 months", price: "£1000"},
    {img: img, title: "Course 1", info: "fhbved fkjvhbdifvb uhfvid udvivf", duration: "6 months", price: "£1000"}
  ]

  return (
    <CardContainer obj={obj} />
  )
}

export default App;






/*

Welcome page
View courses page
Individual course page
Create new course page

Create student page
View all students page


*/