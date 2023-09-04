import '../index.css'
import searchIcon  from '../assets/images/magnifying-glass.svg'

const SearchBar = ({darkMode}) => {
    return (
        <div className={darkMode ? "darkModeElement searchBar" : "searchBar"}>
            <img src={searchIcon} alt="" />
            <input type="text" placeholder='Search for a country...'/>
        </div>
    )
}

export default SearchBar;