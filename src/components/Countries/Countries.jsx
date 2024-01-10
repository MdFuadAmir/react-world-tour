import { useEffect, useState } from "react";
import Country from "./Country";
import './countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);


    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    const handleVisittedCountry = country =>{
        const newVisitedCountry = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountry);
    }
    const handleVisitedFlags = flag =>{
        const newVisitdeFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitdeFlags);
    }
       
       
    return (
        
            <div>
                    <h2>Total Countries: {countries.length}</h2>
                    {/* visited country name */}
                    <div>
                        <h2>Visited Countries: {visitedCountries.length}</h2>
                        <ul>
                            {
                                visitedCountries.map(country => <li className="list" key={country.cca3}>{country?.name?.common}</li>)
                            }
                        </ul>

                    </div>
                    {/* display flags */}
                    <div className="flag-container">
                        {
                            visitedFlags.map((flag, index) => <img key={index} className="flag-container" src={flag}></img> )
                        }


                    </div>
                    {/* display countries */}
                <div className="country-container">
                    {
                        countries.map(country => <Country 
                        key={country.cca3} 
                        country={country}
                        handleVisittedCountry={handleVisittedCountry}
                        handleVisitedFlags= {handleVisitedFlags}

                        ></Country>)
                    }   
                </div>
            </div>
    );
};

export default Countries;