import React from 'react';
import { Link } from 'react-router-dom';
import './MoviesList.css';

const MoviesList = ({ movies }) => {
    return (
        <div className="listContainer">
            <Link to={'/new'}><button className="addMovieBtn">Add New Movie</button></Link>
            <table className="movieTable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Release Date</th>
                        <th>More Info</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.length > 0 ? movies.map((movie) => {
                        return (
                            <tr key={movie.id}>
                                <td>{movie.id}</td>
                                <td>{movie.title}</td>
                                <td>{movie.releaseDate}</td>
                                <td><Link to={`/movies/${movie.id}`}>Click for more info</Link></td>
                            </tr>
                        )

                    }) : null}
                </tbody>
            </table>
        </div>
    );
};

export default MoviesList;