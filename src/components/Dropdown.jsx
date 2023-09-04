import '../index.css'
import dropdown from '../assets/images/angle-down.svg'
import { useState } from 'react'

const Dropdown = ({darkMode}) => {

    const [clicked, setClick] = useState(false)

    const toggleMenu = () => {
        setClick(prev => !prev)
    }

    return (
        <div className='dropdown-component' onClick={toggleMenu}>
            <div className={darkMode ? 'darkModeElement dropdown' : 'dropdown'}> 
                <span>Filter by Region</span>
                <img src={dropdown} alt=""/>
            </div>
            {clicked && <div className={darkMode ? "darkModeElement options" : "options"}>
                <button>Africa</button>
                <button>America</button>
                <button>Asia</button>
                <button>Europe</button>
                <button>Oceania</button>
            </div>}
        </div>
    )

}


export default Dropdown;