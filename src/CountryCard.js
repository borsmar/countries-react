import React from "react";
import number from 'easy-number-formatter';
import { Link } from "react-router-dom";

const CountryCard = ({
    capital,
    name,
    languages,
    currencies,
    population,
    flags,
    region
}) => {
    return (
        <div className='country' key={name}>
        <Link to={{pathname: `${capital}`}}>
            <div className='title'>
                <h2>{name}</h2><h3>{capital}</h3>
            </div>
            <img src={flags.png} alt={name} />
            <div className='cardContent'>
                <p>Continent: <span>{region}</span></p>
                <p>Population: <span> {number.formatNumber(population)} </span></p>
            </div>
        </Link>
        </div>
    )
}
export default CountryCard;
