import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto py-3">
                        <Link className="nav-link ps-5" to="/">
                            <span className="text-gray ">Home</span>
                        </Link>
                        <Link className="nav-link ps-5" to="/projects">
                            <span className="text-gray ">Projects</span>
                        </Link>
                        <Link className="nav-link ps-5" to="/blogs">
                            <span className="text-gray ">Blogs</span>
                        </Link>
                        <Link className="nav-link ps-5" to="/resume">
                            <span className="text-gray ">Resume</span>
                        </Link>
                        <Link className="nav-link px-5 me-5" to="/contact">
                            <span className="text-gray ">Contact Me</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;