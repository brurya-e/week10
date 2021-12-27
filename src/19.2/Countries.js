import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Countries = () => {
    const [term, setTerm] = useState('all');
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        console.log(term)

        const search = async () => {
            const { data } = await axios.get('https://restcountries.eu/rest/v2/'+ term);
            setCountries(data);
            console.log(data)
        };
        search();
    }, [term]);

    const renderedCountries = countries.map((country) => {
        return (
          <div key={country.id} className="item">
            <div className="content">
              <div className="header">{country.title}</div>
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
