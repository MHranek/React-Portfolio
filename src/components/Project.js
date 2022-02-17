import React from 'react';
import './Project.css'

const styles = {
    card: {
        flex: '1 0 45%',
        margin: '20px',
        height: '400px'
    },
    text: {
        backgroundColor: '#3DB6FF',
        width: 'fit-content',
        position: 'absolute',
        left: 0,
        bottom: '30px',
        padding: '5px',
        lineHeight: '1.2',
        color: '#4D4D4D'
    }
}

function Project(props) {
    return (
        <div className='d-flex flex-wrap justify-content-around'>
            {props.projects.map((project) => {
                return <div id={project.id} key={project.name} className='card justify-content-end' style={styles.card}>
                    <div style={styles.text}>
                    <h1>{project.name}</h1>
                    <p>{project.description}</p>
                    <a className='text-decoration-none' href={project.deployedLink}>Deployed App</a><br></br>
                    <a className='text-decoration-none' href={project.githubLink}>Github</a>
                    </div>
                </div>
            })}
        </div>
    )
}

export default Project;