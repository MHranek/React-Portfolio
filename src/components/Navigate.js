import React from 'react';

function Navigate({ currentPage, handlePageChange }) {
    return (
        <ul className='nav nav-tabs'>
            <li className='nav-item'>
                <a 
                href='#About'
                onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                About Me
                </a>
            </li>
            <li className='nav-item'>
                <a 
                href='#Portfolio'
                onClick={() => handlePageChange('Portfolio')}
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                Portfolio
                </a>
            </li>
            <li className='nav-item'>
                <a 
                href='#Contact'
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                Contact Me
                </a>
            </li>
        </ul>
    )
}

export default Navigate;