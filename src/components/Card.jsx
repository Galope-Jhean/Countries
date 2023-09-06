

const Card = ({Name, Flag, Population, Region, Capital}) => {
    return (
        <div className="card">
            <img src={Flag} alt=""/>
            <div className="details">
                <h3>{Name}</h3>
                <span className='detail-stats'><strong>Population:</strong> {Population}</span>
                <span className='detail-stats'><strong>Region:</strong> {Region}</span>
                <span className='detail-stats'><strong>Capital:</strong> {Capital}</span>
            </div>
        </div>
    )
}

export default Card;