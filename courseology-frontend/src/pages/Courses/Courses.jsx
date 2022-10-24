import "./Courses.scss";
import NavBar from "../../containers/NavBar/NavBar";
import Header from "../../components/Header/Header";
import CardContainer from "../../containers/CardContainer/CardContainer";
import SearchBar from "../../components/SearchBar/SearchBar";

const Courses = () => {
  return (
    <div className="courses">
        <div className="courses__navbar">
            <NavBar />
        </div>
        <div className="courses__container">
            <div className="courses__header">
                <Header heading="View Our Courses"/>
            </div>
            <div className="courses__search-bar">
                <SearchBar />
            </div>
            <div className="courses__card-container">
                <CardContainer />
            </div>
        </div>
    </div>
  )
}

export default Courses