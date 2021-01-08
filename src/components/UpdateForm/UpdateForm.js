import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import './UpdateForm.css'

const UpdateForm = ({ movie, updateMovie, history }) => {
    const [values, setValues] = useState({});
    const [actors, setActors] = useState([]);
    const [genres, setGenres] = useState([]); 

    useEffect(() => {
        setValues(movie)
        setActors(movie.actors)
        setGenres(movie.genres)
    }, [movie])

    const handleChangeValues = (newValue) => {
        setValues({ ...values, ...newValue });
    }

    const handleActorChanges = (newVal, pos) => {
        actors.splice(pos,1,newVal);
        setActors(actors);
        setValues({...values, ...actors});
    }

    const handleGenreChanges = (newVal, pos) => {
        genres.splice(pos,1,newVal);
        setGenres(genres);
        setValues({...values, ...genres});
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        updateMovie(values.id, values);
        history.push("/");
    }

    return (
        <div className="form-container">
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
                <label>Movie Title</label>
                <input type="text" value={values.title || ""} onChange={(e) => handleChangeValues({ title: e.target.value })} />
                <br />
                <label>URL for poster</label>
                <input type="text" value={values.posterurl || ""} onChange={(e) => handleChangeValues({ posterurl: e.target.value })} />
                <br />
                <label>Plot</label>
                <textarea type="text" value={values.storyline || ""} onChange={(e) => handleChangeValues({ storyline: e.target.value })} />
                <br />
                <label>Actors</label>
                {actors ? actors.map((actor, index) => {
                    return (
                        <>
                            <input key={index} type="text" value={actor || ""} onChange={(e) => handleActorChanges(e.target.value,index)} />
                            <br />
                        </>
                    )
                }) : null}
                <label>Genres</label>
                {genres ? genres.map((genre, index) => {
                    return (
                        <>
                            <input key={index} type="text" value={genre || ""} onChange={(e) => handleGenreChanges(e.target.value,index)} />
                            <br />
                        </>
                    )
                }) : null}
                <label>Release Date</label>
                <input type="text" value={values.releaseDate || ""} onChange={(e) => handleChangeValues({ releaseDate: e.target.value })} />
                <br />
                <label>Rating </label>
                <input type="number" min="0" max="10" value={values.imdbRating || ""} onChange={(e) => handleChangeValues({ imdbRating: e.target.value })} />
                <br />
                <button type="submit">Add Movie</button>
            </form>
        </div>
    );
};

export default withRouter(UpdateForm);