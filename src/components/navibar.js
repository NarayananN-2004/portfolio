import React from 'react';
import './navibar.css';
import resume from '../Resume.pdf';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
const Navibar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
        document.body.style.backgroundColor = isDarkMode ? 'black' : 'white';
        document.body.style.color = isDarkMode ? 'white' : 'black';
    }, [isDarkMode]);
    return (
        <nav className="navbar">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    My Portfolio
                </Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/projects">
                            Projects
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">
                            Contact
                        </Link>
                    </li>
                    <li className="nav-item">
                        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=brightness_6" />
                        <button className="nav-link" onClick={() => setIsDarkMode(!isDarkMode)} style={{ border: 'none', background: 'transparent', color: 'inherit', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                            <span className="material-symbols-outlined">
                                brightness_6
                            </span>
                        </button>
                    </li>
                </ul>

            </div>


        </nav>

    );
};
export default Navibar;