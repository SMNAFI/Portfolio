import React from 'react';
import Nav from '../Nav/Nav';
import img11 from '../../images/img11.png';
import img12 from '../../images/img12.png';
import img13 from '../../images/img13.png';
import img21 from '../../images/img21.png';
import img22 from '../../images/img22.png';
import img23 from '../../images/img23.png';
import img31 from '../../images/img31.png';
import img32 from '../../images/img32.png';
import img33 from '../../images/img33.png';
import img34 from '../../images/img34.png';
import img41 from '../../images/img41.png';
import img42 from '../../images/img42.png';
import img43 from '../../images/img43.png';
import ProjectItem from '../ProjectItem/ProjectItem';

const projectData = [
    {
        id: 1,
        title: 'Easy Web',
        img: [img11, img12, img13],
        description: "A React website for web developer company showcasing their web services. Users have access to their dashboard to see their orders and to give reviews. There is also an admin dashboard for updating order status, adding services and managing.",
        github: "https://github.com/SMNAFI/EasyWeb-client",
        live: "https://easyweb1.web.app/"
    }, {
        id: 2,
        title: 'Book Land',
        img: [img21, img22, img23],
        description: "This is a react website for a book shop showcasing their products. Users can place orders as well as see their previous orders. Also, there is an admin dashboard for adding products and managing.",
        github: "https://github.com/SMNAFI/BookLand-client",
        live: "https://bookshop-assignment-10.web.app/"
    }, {
        id: 3,
        title: "Let's Move",
        img: [img31, img32, img33, img34],
        description: "A simple ride-finding website using react. Users can choose ride set destination. Google map has also been integrated.",
        github: "https://github.com/SMNAFI/Lets-Move",
        live: "https://auth-assignment9.web.app/"
    }, {
        id: 4,
        title: "League Finder",
        img: [img41, img42, img43],
        description: "Website to find leagues with detailed information using 'the sports db API'.",
        github: "https://github.com/SMNAFI/league-finder",
        live: "https://leaguefinder-react.netlify.app/"
    }
]


const Projects = () => {
    return (
        <div className="container-dark">
            <Nav />
            <div className="text-center">
                <span className="text-center glitch mt-5 h1" data-text="MY FEATURED PROJECTS">MY FEATURED PROJECTS</span>
            </div>
            <div className="container-p">
                {
                    projectData.map(data => <ProjectItem data={data} key={data.id} />)
                }
            </div>
        </div>
    );
};

export default Projects;