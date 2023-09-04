import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown";
import App, { AppData } from '../App';
import Card from "./Card";
import { useContext } from 'react';

const Main = () => {

    const {darkMode} = useContext(AppData)[0];

    return (
        <div className={darkMode ? "darkMode main" : "main"}>
            <div className="searchContainer">
                <SearchBar darkMode={darkMode}/>
            </div>
            <div>
                <Dropdown darkMode={darkMode}/>
            </div>
            <div className="cardContainer">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )

}

export default Main;