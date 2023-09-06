import '../index.css'
import dropdown from '../assets/images/angle-down.svg'
import { useState } from 'react'

const Dropdown = ({darkMode, onRegionChange}) => {

    const [clicked, setClick] = useState(false)
    const [state, setState] = useState("Filter By Region");

    const toggleMenu = () => {
        setClick(prev => !prev)
    }
  
  const handleRegionSelect = (selectedRegion) => {
    // Call the callback function with the selected region
    selectedRegion === "All" ? selectedRegion = "Filter By Region" : selectedRegion;
    setState(selectedRegion)
    onRegionChange(selectedRegion)
    setClick(true);
  };

    return (
        <div className='dropdown-component' onClick={toggleMenu}>
            <div className={darkMode ? 'darkModeElement dropdown' : 'dropdown'}> 
                <span>{state}</span>
                <img src={dropdown} alt=""/>
            </div>
            {clicked && <div className={darkMode ? "darkModeElement options" : "options"}>
                <button onClick={() => handleRegionSelect("All")}>All</button>
                <button onClick={() => handleRegionSelect("Africa")}>Africa</button>
                <button onClick={() => handleRegionSelect("Americas")}>Americas</button>
                <button onClick={() => handleRegionSelect("Asia")}>Asia</button>
                <button onClick={() => handleRegionSelect("Europe")}>Europe</button>
                <button onClick={() => handleRegionSelect("Oceania")}>Oceania</button>
            </div>}
        </div>
    )

}


export default Dropdown;