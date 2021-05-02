import React from 'react';
import { Carousel } from '3d-react-carousal';
import './ProjectItem.css';

const ProjectItem = ({ data }) => {
    let slides = [];
    const { id, title, img, description, live, github } = data;
    img.map((image, index) => slides.push(
        <img src={image} alt={index} />
    ))
    return (
        <div className="row mt-5 py-5" style={{ minHeight: "330px" }}>
            {
                id % 2 === 1 && <>
                    <div className="col-lg-6">
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <a href={github} target="_blank" rel="noopener noreferrer" className="project-link">Github </a>
                        <a href={live} target="_blank" rel="noopener noreferrer" className="project-link"> Live</a>
                    </div>
                    <div className="col-lg-6 py-3">
                        <Carousel slides={slides} autoplay={true} interval={5000} />
                    </div>
                </>
            }
            {
                id % 2 === 0 && <>
                    <div className="col-lg-6 py-3">
                        <Carousel slides={slides} autoplay={true} interval={5000} />
                    </div>
                    <div className="col-lg-6">
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <a href={github} target="_blank" rel="noopener noreferrer" className="project-link">Github</a>
                        <a href={live} target="_blank" rel="noopener noreferrer" className="project-link"> Live</a>
                    </div>
                </>
            }
        </div>
    );
};

export default ProjectItem;