import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="nav-item">
                <Link to="/">Show All Movies</Link>
            </div>
            <div className="nav-item">
                <Link to="/new">Add New Movie</Link>
            </div>
        </div>
    );
};

export default NavBar;