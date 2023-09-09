import { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { AppData } from "../App";

const Details = () => {
    const [country, setCountry] = useState({});
    const [data, setData] = useState([]);
    const { name } = useParams();
    const {darkMode} = useContext(AppData)[0];

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${name}`)
            .then(response => response.json())
            .then(data => setCountry(data[0]))
            .catch(error => console.error(error));
    }, [name]);

    useEffect(() => {
      fetch(` https://restcountries.com/v3.1/all`)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.log(error))
    }, [])


    if (!country) {
        return <p>Loading...</p>;
    }

    const {
        flags: { svg: flagSvgUrl } = {},
        name: { common } = {},
        population,
        region,
        subregion,
        capital,
        tld: topLevelDomain,
        currencies,
        languages,
        borders
    } = country || {};

    let formattedBorders = [];

    if (borders) {
      data.forEach((country) => {
        borders.forEach((countryBorder) => {
          if (countryBorder === country.cioc) {
            formattedBorders.push(country.name.common);
          }
        });
      });
    }

    const borderList = formattedBorders.map((border, index) => (
      <Link 
        key={index} 
        className={darkMode ? "darkModeElement border-link" : "border-link" }
        to={`/countries/${border}`}>
          {border}
      </Link>
    ))

    let currencyNames = "";

    if (typeof currencies === "object") {
      currencyNames = Object.values(currencies)
        .map(currency => currency.name)
        .join(", ");
    }

    const languageList = languages
    ? Object.keys(languages).map(languageCode => {
        const languageName = languages[languageCode];
        return languageName;
      })
    : null;
  
    const languageFormat = languageList ? languageList.join(", ") : '';
  
    return (
      <div className="details-container">
        <div className="country-flag">
          <img src={flagSvgUrl} alt={`Loading...`} />
        </div>
        <div className="country-details">
          <h2>{common}</h2>
          <div className="overall-details">
            <div className="toplevel-details">
              <span><strong>Population: </strong>{population?.toLocaleString("en-US")}</span><br />
              <span><strong>Region: </strong>{region}</span><br />
              <span><strong>Subregion: </strong>{subregion}</span><br />
              <span><strong>Capital: </strong>{capital}</span><br />
            </div>
            <span className="newSection"></span>
            <div className="secondlevel-details">
              <span><strong>Top Level Domain: </strong>{topLevelDomain}</span><br />
              <span><strong>Currencies: </strong>{currencyNames}</span><br />
              <span><strong>Languages: </strong>{languageFormat}</span><br />
            </div>
          </div>
          <span className="newSection"></span>
          <span><strong>Border Countries: </strong></span>
          <div className="border-container">
              {formattedBorders.length > 0 ? borderList : 'None'}
          </div>
        </div>
      </div>
    );
  
};

export default Details;
