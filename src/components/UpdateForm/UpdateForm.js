import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

const UpdateForm = ({ movie, updateMovie, history }) => {
    const [values, setValues] = useState({});
    const [actors, setActors] = useState([])

    useEffect(() => {
        setValues(movie)
        setActors(movie.actors)
    }, [movie])

    const handleChangeValues = (newValue) => {
        setValues({ ...values, ...newValue });
    }

    const HandleActorChanges = (pos, newVal) => {
        actors.splice(pos,1,newVal)
        setActors(actors);
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
                            <input type="text" value={actors[index]} onChange={(e) => HandleActorChanges(index,e.target.value)} />
                            <br />
                        </>
                    )
                }) : null}
                {/* <input type="text" value={values.actor} onChange={(e) => handleChangeValues({ actor: e.target.value })}/>
                <br /> */}
                <label>Genres</label>
                {/* <input type="text" value={values.genre} onChange={(e) => handleChangeValues({ genre: e.target.value })}/> */}
                <br />
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