import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Countries = () => {
    const [term, setTerm] = useState('');
    const [countries, setCountries] = useState([]);

    useEffect(() => {  
        const search = async () => {
            if (term.length > 0 ) {
                const { data } = await axios.get('https://restcountries.com/v3.1/name/'+ term);
                setCountries(data);
            }
            else{
            const { data } = await axios.get('https://restcountries.com/v3.1/all');
            setCountries(data);
            }
        };
        search();
    }, [term]);

    const renderedCountries = countries.map((country) => {
        return (
          <div key={country.ccn3} className="item">
            <div className="content">
              <div className="header">{country.name.official}</div>
            </div>
          </div>
        );
      });
    
      return (
        <div>
          <div className="ui form">
            <div className="field">
              <label>Enter Search Term</label>
              <input
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                className="input"
              />
            </div>
          </div>
          <div className="ui celled list">{renderedCountries}</div>
        </div>
      );
};

export default Countries;
