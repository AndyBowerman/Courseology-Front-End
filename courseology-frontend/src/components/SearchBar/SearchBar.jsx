import "./SearchBar.scss";

const SearchBar = () => {
  return (
    <form className="search-bar">
        <input className="search-bar__input" type="text" placeholder="Search Here" />
        <div className="search-bar__container">
            <label className="search-bar__label" htmlFor="short-courses">View Short Courses: </label>
            <input className="search-bar__checkbox" type="checkbox" id="short-courses" name="short-courses" value="View Short Courses"/>
        </div>        
    </form>
  )
}

export default SearchBar