import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown";
import App, { AppData } from '../App';
import Card from "./Card";
import { useContext } from 'react';

const CountryData = [
    {
        Name: 'Germany',
        Population: '81,770,900',
        Region: 'Europe',
        Capital: 'Berlin'
    },
    {
        Name: 'Brazil',
        Population: '206,135,893',
        Region: 'Americas',
        Capital: 'Brasilia'
    },
    {
        Name: 'Germany',
        Population: '81,770,900',
        Region: 'Europe',
        Capital: 'Berlin'
    },
    {
        Name: 'Brazil',
        Population: '206,135,893',
        Region: 'Americas',
        Capital: 'Brasilia'
    },
    {
        Name: 'Germany',
        Population: '81,770,900',
        Region: 'Europe',
        Capital: 'Berlin'
    },
    {
        Name: 'Brazil',
        Population: '206,135,893',
        Region: 'Americas',
        Capital: 'Brasilia'
    },
    {
        Name: 'Germany',
        Population: '81,770,900',
        Region: 'Europe',
        Capital: 'Berlin'
    },
    {
        Name: 'Brazil',
        Population: '206,135,893',
        Region: 'Americas',
        Capital: 'Brasilia'
    },
]


const cards = CountryData.map((country, index) => (
    <Card
      key={index}
      Name={country.Name}
      Population={country.Population}
      Region={country.Region}
      Capital={country.Capital}
    />
  ));
  

const Main = () => {

    const {darkMode} = useContext(AppData)[0];

    return (
        <div className={darkMode ? "darkMode main" : "main"}>
            <div className="navigation">
                <div className="searchContainer">
                    <SearchBar darkMode={darkMode}/>
                </div>
                <div className="dropdownContainer">
                    <Dropdown darkMode={darkMode}/>
                </div>
            </div>
            <div className="cardContainer">
                {cards}
            </div>
        </div>
    )

}

export default Main;