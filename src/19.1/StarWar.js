import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StarWar = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://swapi.dev/api/films/1/');
            setMovie(data);
            console.log(data)
        };

        search();

    }, []);

    return <div>
        <p>{movie.title} </p>
        <p>{movie.director} </p>
    </div>;
};

export default StarWar;
