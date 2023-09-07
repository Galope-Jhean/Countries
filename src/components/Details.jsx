import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
    const [country, setCountry] = useState({});
    const { name } = useParams();

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${name}`)
            .then(response => response.json())
            .then(data => setCountry(data[0]))
            .catch(error => console.error(error));
    }, [name]);

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
    console.log(borders)
    return (
      <div className="details-container">
        <div className="country-flag">
          <img src={flagSvgUrl} alt={`Loading...`} />
        </div>
        <div className="country-details">
          <h2>{common}</h2>
          <span><strong>Population: </strong>{population?.toLocaleString("en-US")}</span>
          <span><strong>Region: </strong>{region}</span>
          <span><strong>Subregion: </strong>{subregion}</span>
          <span><strong>Capital: </strong>{capital}</span>
          <span className="newSection"></span>
          <span><strong>Top Level Domain: </strong>{topLevelDomain}</span>
          <span><strong>Currencies: </strong>{currencyNames}</span>
          <span><strong>Languages: </strong>{languageFormat}</span>
          <span><strong>Borders: </strong>{borders ? borders.join(", ") : 'None'}</span>
        </div>
        <div className="borderLink">
        </div>
      </div>
    );
  
};

export default Details;
