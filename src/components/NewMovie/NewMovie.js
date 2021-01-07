import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
const { v4: uuidv4 } = require('uuid');

const NewMovie = ({ addNewMovie, history }) => {
    const [values, setValues] = useState({title: "", posterurl: "", storyline: "", actor: "", genre: "", releaseDate: "", imdbRating: "" })
    const [actors, setActors] = useState([])
    const [genres, setGenres] = useState([])

    const handleChangeValues = (newValue) => {
        setValues({ ...values, ...newValue });
    }

    const handleActorChange = (e) => {
        e.preventDefault()
        let valToAddToArray = values.actor;
        actors.push(valToAddToArray);
        setValues((values) => {
            return {...values, actor: ""}
        })
        setActors(actors)
    }

    const handleGenreChange = (e) => {
        e.preventDefault()
        let valToAddToArray = values.genre;
        genres.push(valToAddToArray);
        values.genre = "";
        setValues((values) => {
            return {...values, genre: ""}
        })
        setGenres(genres)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newElem = {
            id: uuidv4(), // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
            title: values.title,
            posterurl: values.posterurl,
            storyline: values.storyline,
            actors: actors,
            genres: genres,
            releaseDate: values.releaseDate,
            imdbRating: values.imdbRating
        }
        addNewMovie(newElem);
        console.log(newElem);
        redirectWithId(newElem.id);

    }


    const redirectWithId = (id) => {
        history.push(`/movies/${id}`)
    }

    return (
        <div className="form-container">
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
                <label>Movie Title</label>
                <input type="text" value={values.title} onChange={(e) => handleChangeValues({ title: e.target.value })} />
                <br />
                <label>URL for poster</label>
                <input type="text" value={values.posterurl} onChange={(e) => handleChangeValues({ posterurl: e.target.value })} />
                <br />
                <label>Plot</label>
                <textarea type="text" value={values.storyline} onChange={(e) => handleChangeValues({ storyline: e.target.value })}/>
                <br />
                <label>Actors</label>
                <input type="text" value={values.actor} onChange={(e) => handleChangeValues({ actor: e.target.value })}/>
                <button onClick={(e) => handleActorChange(e)}>Add Actor</button>
                <br />
                <label>Genres</label>
                <input type="text" value={values.genre} onChange={(e) => handleChangeValues({ genre: e.target.value })}/>
                <button onClick={(e) => handleGenreChange(e)}>Add Genre</button>
                <br />
                <label>Release Date</label>
                <input type="text" value={values.releaseDate} onChange={(e) => handleChangeValues({ releaseDate: e.target.value })} />
                <br />
                <label>Rating </label>
                <input type="number" min="0" max="10" value={values.imdbRating} onChange={(e) => handleChangeValues({ imdbRating: e.target.value })} />
                <br />
                <button type="submit">Add Movie</button>
            </form>
        </div>
    )
};

export default withRouter(NewMovie);