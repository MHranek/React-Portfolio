import React, { useState } from 'react';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Navigate from './Navigate';
import Col from '../utils/Col';
import Row from '../utils/Row';
import Footer from './Footer';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    // render function returns the html snippet of what page the user is on
    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />
        }
        if (currentPage === 'Contact') {
            return <Contact />
        }
        if (currentPage === 'Resume') {
            return <Resume />
        }
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Navigate currentPage={currentPage} handlePageChange={handlePageChange} />
            <Row>
                <Col size='md-10 lg-8'>
                    {renderPage()}
                </Col>
            </Row>
            <Footer />
        </div>
    )
}