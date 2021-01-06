import React from 'react';
import { useParams } from 'react-router-dom';


const SingleMovie = ( { movies }) => {
    const { movieID } = useParams();

    const movie = movies.length > 0 && movies.find(item => item.id === movieID);

    console.log(movie);

    return (
        <div>
            <p>Should be in the singlemovie component now</p>
        </div>
    );
};

export default SingleMovie;