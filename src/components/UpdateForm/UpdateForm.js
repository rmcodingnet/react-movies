import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

const UpdateForm = ({ movie, updateMovie, history }) => {
    const [values, setValues] = useState({});

    useEffect(() => {
        setValues(movie)
    }, [movie])

    const handleChangeValues = (newValue) => {
        setValues({ ...values, ...newValue });
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
                <input type="text" value={values.title} onChange={(e) => handleChangeValues({ title: e.target.value })}></input>
                <br />
                <label>Release Date</label>
                <input type="text" value={values.releaseDate} onChange={(e) => handleChangeValues({ releaseDate: e.target.value })}></input>
                <br />
                <button type="submit">Update Movie</button>
            </form>
        </div>
    );
};

export default withRouter(UpdateForm);