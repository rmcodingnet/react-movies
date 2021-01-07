import React, { useState } from 'react';
import { useParams, withRouter } from 'react-router-dom';
import UpdateForm from '../UpdateForm/UpdateForm';


const SingleMovie = ( { movies, updateMovie, deleteMovie, history }) => {
    const { movieID } = useParams();

    const [showUpdateForm, setShowUpdateForm] = useState(false);


    const movie = movies.length > 0 && movies.find(item => item.id === movieID);

    console.log(movie);

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
            <button onClick={onUpdateButtonClickHandler}>Update Info</button>
            <button onClick={onDeleteButtonClickHandler}>Delete Movie</button>
            {updateForm}
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

export default withRouter(SingleMovie);