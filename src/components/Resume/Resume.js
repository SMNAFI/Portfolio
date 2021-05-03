import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Line } from 'rc-progress';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import './Resume.css';
import design from '../../images/design.png';
import database from '../../images/databases.png';
import programming from '../../images/programming.png';
import web from '../../images/web.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Resume = () => {
    return (
        <div className="container-dark">
            <Nav />
            <div className="resume-container">
                <div>
                    <h1 className="pb-4 glitch" data-text="About Me">About Me</h1>
                    <p>Hi! I am SM NAFI, a web designer/developer focused on crafting great web experiences. <br /> Designing and Coding have been my passion since the days I started working with computers <br /> but I found myself into web design/development since 2020.</p>
                    <p className="pb-2">I enjoy creating beautifully designed, intuitive and functional websites.</p>
                    <Link to="/smnafi.pdf" target="_blank" download className="btn btn-main">Get My Resume</Link>
                </div>

                <div className="pt-5 mt-5" style={{ maxWidth: "700px" }}>
                    <h1 className="pb-4 glitch" data-text="Developer Skills">Developer Skills</h1>
                    <div>
                        <h6>HTML5</h6>
                        <div>
                            <Line percent="90" strokeWidth="1.5" trailWidth="1.5" strokeColor="#3e98c7" />
                        </div>
                    </div>
                    <div>
                        <h6>CSS3</h6>
                        <div>
                            <Line percent="90" strokeWidth="1.5" trailWidth="1.5" strokeColor="#3e98c7" />
                        </div>
                    </div>
                    <div>
                        <h6>Bootstrap</h6>
                        <div>
                            <Line percent="85" strokeWidth="1.5" trailWidth="1.5" strokeColor="#3e98c7" />
                        </div>
                    </div>
                    <div>
                        <h6>React JS</h6>
                        <div>
                            <Line percent="80" strokeWidth="1.5" trailWidth="1.5" strokeColor="#3e98c7" />
                        </div>
                    </div>
                    <div>
                        <h6>Node JS</h6>
                        <div>
                            <Line percent="60" strokeWidth="1.5" trailWidth="1.5" strokeColor="#3e98c7" />
                        </div>
                    </div>
                    <div>
                        <h6>Express JS</h6>
                        <div>
                            <Line percent="65" strokeWidth="1.5" trailWidth="1.5" strokeColor="#3e98c7" />
                        </div>
                    </div>
                    <div>
                        <h6>MongoDB</h6>
                        <div>
                            <Line percent="75" strokeWidth="1.5" trailWidth="1.5" strokeColor="#3e98c7" trailColor="lightgray" />
                        </div>
                    </div>
                    <div>
                        <h6>Firebase</h6>
                        <div>
                            <Line percent="65" strokeWidth="1.5" trailWidth="1.5" strokeColor="#3e98c7" />
                        </div>
                    </div>
                </div>

                <div className="pt-5 mt-5">
                    <h1 className="pb-4 glitch" data-text="Coding Skills">Coding Skills</h1>
                    <div className="row">
                        <div className="col-md-3">
                            <div>
                                <div className="d-flex justify-content-center py-3">
                                    <div style={{ width: 100, height: 100 }}>
                                        <CircularProgressbar value={88} text={`88%`} styles={buildStyles({
                                            strokeLinecap: "butt",
                                            textColor: "lightgray"
                                        })} />
                                    </div>
                                </div>
                                <h6 className="text-center">C</h6>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div>
                                <div className="d-flex justify-content-center py-3">
                                    <div style={{ width: 100, height: 100 }}>
                                        <CircularProgressbar value={90} text={`90%`} styles={buildStyles({
                                            strokeLinecap: "butt",
                                            textColor: "lightgray"
                                        })} />
                                    </div>
                                </div>
                                <h6 className="text-center">C++</h6>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div>
                                <div className="d-flex justify-content-center py-3">
                                    <div style={{ width: 100, height: 100 }}>
                                        <CircularProgressbar value={80} text={`80%`} styles={buildStyles({
                                            strokeLinecap: "butt",
                                            textColor: "lightgray",
                                            pathColor: "#3e98c7",
                                            trailColor: "lightgray"
                                        })} />
                                    </div>
                                </div>
                                <h6 className="text-center">JavaScript</h6>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div>
                                <div className="d-flex justify-content-center py-3">
                                    <div style={{ width: 100, height: 100 }}>
                                        <CircularProgressbar value={65} text={`65%`} styles={buildStyles({
                                            strokeLinecap: "butt",
                                            textColor: "lightgray"
                                        })} />
                                    </div>
                                </div>
                                <h6 className="text-center">Python</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-5 pb-3 mt-5">
                    <h1 className="pb-4 glitch" data-text="Knowledge">Knowledge</h1>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="p-3">
                                <div className="d-flex justify-content-center p-3">
                                    <img src={design} alt="" />
                                </div>
                                <h6 className="text-center">Website/Graphic Designing</h6>
                            </div>
                            <div className="p-3">
                                <div className="d-flex justify-content-center p-3">
                                    <img src={web} alt="" />
                                </div>
                                <h6 className="text-center">Custom Website Development</h6>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="p-3">
                                <div className="d-flex justify-content-center p-3">
                                    <img src={programming} alt="" />
                                </div>
                                <h6 className="text-center">Competitive Programming</h6>
                            </div>
                            <div className="p-3">
                                <div className="d-flex justify-content-center p-3">
                                    <img src={database} alt="" />
                                </div>
                                <h6 className="text-center">Back End</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-5 mt-5">
                    <h1 className="pb-4 glitch" data-text="Education">Education</h1>
                    <p><small><i>2019 - present</i></small></p>
                    <h5>B.Sc in Computer Science</h5>
                    <p> - Mymensing Engineering College</p>
                </div>

                <div className="text-center footer-icon pt-5 mt-5 pb-5">
                    <a href="https://github.com/SMNAFI" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://www.linkedin.com/in/sayem md nafi 7781a6201/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100012316758149" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Resume;