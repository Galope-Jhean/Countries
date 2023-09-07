import { Link } from "react-router-dom";

const Card = ({Name, darkMode, Flag, Population, Region, Capital}) => {
    return (
        <Link className={darkMode ? "darkModeLink" : "links"} to={`countries/${Name}`}>
            <div className="card">
                <img src={Flag} alt=""/>
                <div className="details">
                    <h3>{Name}</h3>
                    <span className='detail-stats'><strong>Population:</strong> {Population}</span>
                    <span className='detail-stats'><strong>Region:</strong> {Region}</span>
                    <span className='detail-stats'><strong>Capital:</strong> {Capital}</span>
                </div>
            </div>
        </Link>
    )
}

export default Card;