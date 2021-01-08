import React, { useState } from 'react';
import { useParams, withRouter } from 'react-router-dom';
import UpdateForm from '../UpdateForm/UpdateForm';
import './SingleMovie.css'


const SingleMovie = ( { movies, updateMovie, deleteMovie, history }) => {
    const { movieID } = useParams();

    const [showUpdateForm, setShowUpdateForm] = useState(false);

    const movie = movies.length > 0 && movies.find(item => item.id === movieID);

    const updateForm = showUpdateForm ? <UpdateForm movie={movie} updateMovie={updateMovie}/> : null;

    const onDeleteButtonClickHandler = () => {
        deleteMovie(movieID);
        history.push('/');
    }

    const onUpdateButtonClickHandler = () => {
        setShowUpdateForm(true)
    }
    
    return (
        <div className="movieInfo">
            <button className="funcBtn" onClick={onUpdateButtonClickHandler}>Update Info</button>
            <button className="funcBtn" onClick={onDeleteButtonClickHandler}>Delete Movie</button>
            {updateForm}
            <h1>{movie.title}</h1>
            <img alt="Poster for selected movie" src={movie.posterurl}></img>
            <p className="plot">Plot: {movie.storyline}</p>
            <p className="actors">Actors:</p>
            <ul>
            { movie.actors ? movie.actors.map((actor, index) => {
                return <li key={index}>{actor}</li>
            }) : null}
            </ul>
            <p className="genres">Genres:</p>
            <ul>
                { movie.genres ? movie.genres.map((genre, index) => {
                    return <li key={index}>{genre}</li>
                }) : null}
            </ul>
            <p className="releaseDate">Release Date: {movie.releaseDate}</p>
            <p className="rating">Rating: {movie.imdbRating}/10</p>
        </div>
    );
};

export default withRouter(SingleMovie);