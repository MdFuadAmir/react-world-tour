import { useState } from "react";
import "./country.css";

const Country = ({ country, handleVisittedCountry, handleVisitedFlags }) => {
  console.log(country);
  const { name, flags, population, area, continents, borders } = country;
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };
  return (
    <div className={`country ${visited && "visited"}`}>
      <h3>Name: {name?.common}</h3>
      <h3>Area: {area}</h3>
      <h3>Population: {population}</h3>
      <h3>Continents: {continents}</h3>
      <h3>Borders: {borders}</h3>
      <img className="flag-width" src={flags?.png} alt="Flag" />
      <div>
        <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
        <br /> <br />
        <button onClick={() =>handleVisittedCountry(country)}>Mark Visited</button>
        <br /> <br />
        <button onClick={() =>handleVisitedFlags(country?.flags?.png)}>Add Flag</button>

        {visited && "I have visited this country."}
      </div>
    </div>
  );
};

export default Country;
