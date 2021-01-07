import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
const { v4: uuidv4 } = require('uuid');

const NewMovie = ({ addNewMovie, history }) => {
    const [values, setValues] = useState({})

    const handleChangeValues = (newValue) => {
        setValues({ ...values, ...newValue });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newElem = {
            id: uuidv4(), // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
            title: values.title,
            releaseDate: values.releaseDate,

        }
        addNewMovie(newElem)
        console.log(newElem);
        redirectWithId(newElem.id)

    }


    const redirectWithId = (id) => {
        history.push(`/movies/${id}`)
    }

    return (
        <div className="form-container">
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
                <label>Movie Title</label>
                <input type="text" value={values.title} onChange={(e) => handleChangeValues({ title: e.target.value })}></input>
                <br/>
                <label>Release Date</label>
                <input type="text" value={values.releaseDate} onChange={(e) => handleChangeValues({ releaseDate: e.target.value })}></input>
                <br/>
                <button type="submit">Add Movie</button>
            </form>
        </div>
    )
};

export default withRouter(NewMovie);