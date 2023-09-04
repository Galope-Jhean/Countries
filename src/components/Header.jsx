import { useContext } from 'react';
import  unshadedMoon  from '../assets/images/moon-regular.svg'
import  shadedMoon from '../assets/images/moon-solid.svg'
import '../index.css'
import App, { AppData } from '../App';

const Header = () => {

    const {darkMode} = useContext(AppData)[0];
    const setTheme = useContext(AppData)[1];
    
    const toggleDarkMode = () => {
        setTheme(theme => {
            return ({
                ...theme,
                darkMode: !darkMode
            })
        })
    }

    return (
        <header className={darkMode ? "darkModeElement" : ""}>
            <h3>Where in the world?</h3>
            <button className='themeToggle' onClick={toggleDarkMode}>
                <img src={darkMode ? shadedMoon : unshadedMoon} alt="moon-icon"/>
                <span>Dark Mode</span>
            </button>

        </header>
    )
}

export default Header;