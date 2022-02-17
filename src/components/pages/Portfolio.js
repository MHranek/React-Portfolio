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
        id: 'teamdex',
        name: 'Teamdex',
        description: 'MySQL/full-stack',
        deployedLink: 'https://intense-eyrie-40065.herokuapp.com/',
        githubLink: 'https://github.com/MHranek/teamdex'
    },
    {
        id: 'teamdex',
        name: 'Teamdex',
        description: 'MySQL/full-stack',
        deployedLink: 'https://intense-eyrie-40065.herokuapp.com/',
        githubLink: 'https://github.com/MHranek/teamdex'
    },
    {
        id: 'teamdex',
        name: 'Teamdex',
        description: 'MySQL/full-stack',
        deployedLink: 'https://intense-eyrie-40065.herokuapp.com/',
        githubLink: 'https://github.com/MHranek/teamdex'
    },
    {
        id: 'teamdex',
        name: 'Teamdex',
        description: 'MySQL/full-stack',
        deployedLink: 'https://intense-eyrie-40065.herokuapp.com/',
        githubLink: 'https://github.com/MHranek/teamdex'
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