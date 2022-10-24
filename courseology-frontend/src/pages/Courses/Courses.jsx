import "./Courses.scss";
import CardContainer from "../../containers/CardContainer/CardContainer";
import SearchBar from "../../components/SearchBar/SearchBar";
import Layout from "../../components/Layout/Layout";
import { useState } from "react";

const Courses = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterValue, setFilterValue] = useState(null);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    }

    const filterShortCourses = (event) => {
        event.target.checked ? setFilterValue("") : setFilterValue(event.target.value);
    }

  return (
    <Layout heading="View Our Courses">
      <div className="courses__search-bar">
        <SearchBar handleSearch={handleSearch} filterShortCourses={filterShortCourses} />
      </div>
      <div className="courses__card-container">
        <CardContainer searchTerm={searchTerm} filterValue={filterValue}/>
      </div>
    </Layout>
  );
};

export default Courses;