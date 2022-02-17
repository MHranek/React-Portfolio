import React from 'react';

function Navigate({ currentPage, handlePageChange }) {
    return (
        <nav className='bg-info pt-5 border-bottom border-5 border-success fs-4'>
            <ul className='nav nav-tabs justify-content-center border-0'>
                <li className='nav-item'>
                    <a
                        href='#About'
                        onClick={() => handlePageChange('About')}
                        className={`${currentPage === 'About' ? 'nav-link active bg-success border-0' : 'nav-link'} text-dark`}
                    >
                        About Me
                    </a>
                </li>
                <li className='nav-item'>
                    <a
                        href='#Portfolio'
                        onClick={() => handlePageChange('Portfolio')}
                        className={`${currentPage === 'Portfolio' ? 'nav-link active bg-success border-0' : 'nav-link'} text-dark`}
                    >
                        Portfolio
                    </a>
                </li>
                <li className='nav-item'>
                    <a
                        href='#Contact'
                        onClick={() => handlePageChange('Contact')}
                        className={`${currentPage === 'Contact' ? 'nav-link active bg-success border-0' : 'nav-link'} text-dark`}
                    >
                        Contact Me
                    </a>
                </li>
                <li className='nav-item'>
                <a
                        href='#Resume'
                        onClick={() => handlePageChange('Resume')}
                        className={`${currentPage === 'Resume' ? 'nav-link active bg-success border-0' : 'nav-link'} text-dark`}
                    >
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigate;