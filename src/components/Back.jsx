import { Link } from "react-router-dom";
import leftArrow from "../assets/images/arrow-left.svg"


const Back = ({darkMode}) => {
    return (
        <>
            <Link to='/' className="back">
                <div className={darkMode ? "darkModeElement button-container" : "button-container"}>
                    <img src={leftArrow} alt="" />
                    <button className="back-btn">
                        Back
                    </button>
                </div>
            </Link>
        </>
    )
}

export default Back;