import React from 'react';

function Navigate({ currentPage, handlePageChange }) {
    return (
        <nav className='pt-5 border-bottom border-5 border-info fs-4 mb-5' id='hero-image'>
            <ul className='nav nav-tabs justify-content-center border-0'>
                <li className='nav-item'>
                    <a
                        href='#About'
                        onClick={() => handlePageChange('About')}
                        className={`${currentPage === 'About' ? 'nav-link active bg-info border-0' : 'nav-link'} mx-2`}
                    >
                        About Me
                    </a>
                </li>
                <li className='nav-item'>
                    <a
                        href='#Portfolio'
                        onClick={() => handlePageChange('Portfolio')}
                        className={`${currentPage === 'Portfolio' ? 'nav-link active bg-info border-0' : 'nav-link'} mx-2`}
                    >
                        Portfolio
                    </a>
                </li>
                <li className='nav-item'>
                    <a
                        href='#Contact'
                        onClick={() => handlePageChange('Contact')}
                        className={`${currentPage === 'Contact' ? 'nav-link active bg-info border-0' : 'nav-link'} mx-2`}
                    >
                        Contact Me
                    </a>
                </li>
                <li className='nav-item'>
                <a
                        href='#Resume'
                        onClick={() => handlePageChange('Resume')}
                        className={`${currentPage === 'Resume' ? 'nav-link active bg-info border-0' : 'nav-link'} mx-2`}
                    >
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigate;