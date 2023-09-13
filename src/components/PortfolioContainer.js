import React from 'react';
import About from '';
import Contact from '';
import Resume from '';
import Portfolio from '';

export default function PortfolioContainer({currentPage, setCurrentPage}) {
    if (currentPage === 'About') {
        return <About />;
    }
    if (currentPage === 'Contact') {
        return <Contact />;
    }
    if (currentPage === 'Resume') {
        return <Resume />;
    }
    return <Portfolio />;
}

