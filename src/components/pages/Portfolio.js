import React from 'react';
import Project from '../Project';

// List of projects
const projectList = [
    {
        id: 'teamdex',
        name: 'Teamdex',
        description: 'MySQL/full-stack',
        deployedLink: 'https://intense-eyrie-40065.herokuapp.com/',
        githubLink: 'https://github.com/MHranek/teamdex'
    },
    {
        id: 'css-cheat-sheet',
        name: 'CSS cheat sheet',
        description: 'HTML/CSS',
        deployedLink: 'https://mhranek.github.io/css-snippet-cheat-sheet/',
        githubLink: 'https://github.com/MHranek/css-snippet-cheat-sheet'
    },
    {
        id: 'password-generator',
        name: 'Password Generator',
        description: 'Javascript',
        deployedLink: 'https://mhranek.github.io/Password_Generator/',
        githubLink: 'https://github.com/MHranek/Password_Generator'
    },
    {
        id: 'weather-dashboard',
        name: 'Weather Dashboard',
        description: 'JQuery/Bootstrap',
        deployedLink: 'https://mhranek.github.io/Weather-Dashboard/',
        githubLink: 'https://github.com/MHranek/Weather-Dashboard'
    },
    {
        id: 'movie-hype-generator',
        name: 'Movie Hype Generator',
        description: 'Bulma/Git Collab',
        deployedLink: 'https://ajread13.github.io/Movie-Hype-Generator/',
        githubLink: 'https://github.com/MHranek/Movie-Hype-Generator'
    },
]

function Portfolio() {
    return (
        <div>
            <Project projects={projectList}/>
        </div>
    )
}

export default Portfolio;