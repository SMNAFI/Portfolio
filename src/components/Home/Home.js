import React from 'react';
import Nav from '../Nav/Nav';
import Typical from 'react-typical';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container-dark vh-100">
            <Nav />
            <div className="d-flex justify-content-center align-items-center h-75 px-5">
                <div>
                    <h1 className="glitch mt-5 h1" data-text="HI, THIS IS SM NAFI." style={{ letterSpacing: "0.1em" }}>HI, THIS IS SM NAFI.</h1>
                    <h2 className="pb-2">I'm a {" "}
                        <Typical
                            steps={['Developer', 2000, 'Programmer', 2000, 'Dreamer', 2000]}
                            loop={Infinity}
                            wrapper="b"
                        />
                    </h2>
                    <Link to="/smnafi.pdf" target="_blank" download className="btn btn-btn btn-main">My Resume</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;