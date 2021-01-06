import React from 'react';
import { useParams } from 'react-router-dom';


const SingleMovie = ( { movies }) => {
    const { movieID } = useParams();

    const movie = movies.length > 0 && movies.find(item => item.id === movieID);

    console.log(movie);

    
    return (
        <div className="movieInfo">
            <button>Update Info</button>
            <button>Delete Movie</button>
            <h1>{movie.title}</h1>
            <img alt="Poster for selected movie" src={movie.posterurl}></img>
            <p>Plot: {movie.storyline}</p>
            <p>Actors:</p>
            <ul>
            { movie.actors ? movie.actors.map((actor) => {
                return <li>{actor}</li>
            }) : null}
            </ul>
            <p>Genres:</p>
            <ul>
                { movie.genres ? movie.genres.map((genre) => {
                    return <li>{genre}</li>
                }) : null}
            </ul>
            <p>Release Date: {movie.releaseDate}</p>
            <p>Rating: {movie.imdbRating}/10</p>
        </div>
    );
};

export default SingleMovie;