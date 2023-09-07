import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown";
import { AppData } from '../App';
import Card from "./Card";
import { useContext, useEffect, useState } from 'react';

const Main = () => {

    const [data, setData] = useState([]);
    const [region, setRegion] = useState("Filter By Region");
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetch(` https://restcountries.com/v3.1/all`)
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.log(error))
    }, [])

    const {darkMode} = useContext(AppData)[0];
    
    const handleRegionChange = selectedRegion => {
        setRegion(selectedRegion);
    };

    const handleSearch = query => {
        setSearchQuery(query);
    }
    
    const filteredByRegion = region === "Filter By Region"
         ? data 
         : data.filter(country => country.region === region);
    
    const filterBySearch = filteredByRegion.filter(country => country.name.common.toLowerCase().includes(searchQuery.toLowerCase()))
      
    const cards = filterBySearch.map((country, index) => (
        <Card
          key={index}
          darkMode={darkMode}
          Name={country.name.common}
          Flag={country.flags.svg}
          Population={country.population.toLocaleString("en-US")}
          Region={country.region}
          Capital={country.capital}
        />
      ));
      
    return (
        <div className={darkMode ? "darkMode main" : "main"}>
            <div className="navigation">
                <div className="searchContainer">
                    <SearchBar darkMode={darkMode} onSearch={handleSearch}/>
                </div>
                <div className="dropdownContainer">
                    <Dropdown darkMode={darkMode} onRegionChange={handleRegionChange} />
                </div>
            </div>
            <div className="cardContainer">
                {cards}
            </div>
            <div className="background-filler"></div>
        </div>
    )

}

export default Main;