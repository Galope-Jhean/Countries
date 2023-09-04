import flag from '../assets/images/de.svg'

const Card = () => {
    return (
        <div className="card">
            <img src={flag} alt=""/>
            <div className="details">
                <h3>Germany</h3>
                <span className='detail-stats'><strong>Population:</strong> 81,770,900</span>
                <span className='detail-stats'><strong>Region:</strong> Europe</span>
                <span className='detail-stats'><strong>Capital:</strong> Berlin</span>
            </div>
        </div>
    )
}

export default Card;