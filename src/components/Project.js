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
        color: '#4D4D4D',
        border: '3px solid'
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
                        <a className='text-decoration-none link-dark' target="_blank" rel="noopener noreferrer" href={project.deployedLink}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                            </svg>
                        </a>
                        <>  </>
                        <a className='text-decoration-none link-dark' target="_blank" rel="noopener noreferrer" href={project.githubLink}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                        </a>
                    </div>
                </div>
            })}
        </div>
    )
}

export default Project;