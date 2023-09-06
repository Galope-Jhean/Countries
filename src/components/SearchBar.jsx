import '../index.css'
import searchIcon  from '../assets/images/magnifying-glass.svg'

const SearchBar = ({darkMode, onSearch}) => {

    const handleInputChanges = event => {
        const query = event.target.value;
        onSearch(query);
    }

    return (
        <div className={darkMode ? "darkModeElement searchBar" : "searchBar"}>
            <img src={searchIcon} alt="" />
            <input 
                type="text" 
                placeholder='Search for a country...'
                onChange={handleInputChanges}
            />
        </div>
    )
}

export default SearchBar;