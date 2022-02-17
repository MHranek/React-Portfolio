import React from 'react';

function Navigate({ currentPage, handlePageChange }) {
    return (
        <nav className='bg-info pt-5 border-bottom border-5 border-success'>
            <ul className='nav nav-tabs justify-content-center border-0'>
                <li className='nav-item'>
                    <a
                        href='#About'
                        onClick={() => handlePageChange('About')}
                        className={currentPage === 'About' ? 'nav-link active bg-success border-0' : 'nav-link'}
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
        </nav>
    )
}

export default Navigate;