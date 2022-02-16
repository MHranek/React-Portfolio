import React, {useState} from 'react';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Navigate from './Navigate';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About Me');

    // render function returns the html snippet of what page the user is on
    const renderPage = () => {
        if (currentPage === 'About Me') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />
        }
        if (currentPage === 'Contact') {
            return <Contact />
        }
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Navigate currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    )
}