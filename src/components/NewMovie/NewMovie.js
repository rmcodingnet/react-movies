import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './NewMovie.css'
const { v4: uuidv4 } = require('uuid');

const NewMovie = ({ addNewMovie, history }) => {
    const [values, setValues] = useState({ title: "", posterurl: "", storyline: "", actors: [], genres: [], releaseDate: "", imdbRating: "" })

    const handleChangeValues = (newValue) => {
        setValues({ ...values, ...newValue });
    }

    const addActor = (e) => {
        e.preventDefault();
        values.actors.push("")
        setValues({ ...values, ...values.actors });
    }

    const updateActor = (newVal, pos) => {
        console.log(pos)
        values.actors.splice(pos, 1, newVal);
        setValues({ ...values, ...values.actors });
    }

    const deleteActor = (e, pos) => {
        e.preventDefault();
        values.actors.splice(pos, 1);
        setValues({...values, ...values.actors})
        
    }

    const addGenre = (e) => {
        e.preventDefault();
        values.genres.push("");
        setValues({...values, ...values.genres});
    }

    const updateGenre = (newVal, pos) => {
        values.genres.splice(pos, 1, newVal);
        setValues({ ...values, ...values.genres })
    }

    const deleteGenre = (e, pos) => {
        e.preventDefault();
        values.genres.splice(pos, 1);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newElem = {
            id: uuidv4(),
            title: values.title,
            posterurl: values.posterurl,
            storyline: values.storyline,
            actors: values.actors,
            genres: values.genres,
            releaseDate: values.releaseDate,
            imdbRating: values.imdbRating
        }
        addNewMovie(newElem);
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
                <textarea type="text" value={values.storyline} onChange={(e) => handleChangeValues({ storyline: e.target.value })} />
                <br />
                <label>Actors</label>
                {values.actors.length > 0 ? values.actors.map((actor, index) => {
                    return (
                        <>
                            <input key={index} type="text" value={actor || ""} onChange={(e) => updateActor(e.target.value, index)} />
                            <button className="deleteBtn" onClick={(e) => deleteActor(e, index)}>Delete Actor </button>
                        </>
                    )
                }) : null}
                <button className="addBtn" onClick={(e) => addActor(e)}>Add Actor</button>
                <br />
                <label>Genres</label>
                {values.genres.length > 0 ? values.genres.map((genre, index) => {
                    return (
                        <>
                            <input key={index} type="text" value={genre || ""} onChange={(e) => updateGenre(e.target.value, index)} />
                            <button className="deleteBtn" onClick={(e) => deleteGenre(e, index)}>Delete Genre</button>
                        </>
                    )
                }) : null }
                <button className="addBtn" onClick={(e) => addGenre(e)}>Add Genre</button>
                <br />
                <label>Release Date</label>
                <input type="text" value={values.releaseDate} onChange={(e) => handleChangeValues({ releaseDate: e.target.value })} />
                <br />
                <label>Rating </label>
                <input type="number" min="0" max="10" value={values.imdbRating} onChange={(e) => handleChangeValues({ imdbRating: e.target.value })} />
                <br />
                <button type="submit" className="submitBtn">Add Movie</button>
            </form>
        </div>
    )
};

export default withRouter(NewMovie);