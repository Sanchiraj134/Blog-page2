import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-right">
                <Link to="/">Home</Link>
            </div>
            <div className="nav-right">
                <Link to="/new-post">New Post</Link>
            </div>
            <div className="nav-right">
                <Link to="/settings">Settings</Link>
            </div>
        </nav>
    );
};

export default Navbar;