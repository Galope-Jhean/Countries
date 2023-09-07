import Back from "./components/Back";
import Details from "./components/Details"
import { AppData } from "./App";
import { useContext } from "react";

const Country = () => {

    const {darkMode} = useContext(AppData)[0];

    return (
        <>
            <div className={darkMode ? "darkMode country" : "main"}>
                <div className="navigation">
                    <Back darkMode={darkMode}/>
                </div>
                <div className="details">
                    <Details/>
                </div>
            </div>

        </>
    )
}

export default Country;