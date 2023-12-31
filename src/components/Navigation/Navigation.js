import React from 'react';
import './Navigation.css';

function Navigation({ currentPage, setCurrentPage}) {
    return (
        <ul
            className='nav nav-tabs'
            style={{paddingRight: '40px', paddingTop:'30px'}}
        >
            <li className='nav-item'>
                <a
                    id='nav-link'
                    href='#about'
                    onClick={() => setCurrentPage('About')}
                    className={currentPage === 'About' ? 'nav-link-active' : 'nav-link'}
                >
                    About
                </a>
            </li>
            <li className='nav-item'>
                <a
                    id='nav-link'
                    href='#portfolio'
                    onClick={() => setCurrentPage('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-link-active' : 'nav-link'}
                >
                    Portfolio
                </a>
            </li>
            <li className='nav-item'>
                <a
                    id='nav-link'
                    href='#resume'
                    onClick={() => setCurrentPage('Resume')}
                    className={currentPage === 'Resume' ? 'nav-link-active' : 'nav-link'}
                >
                    Resume
                </a>
            </li>
            <li className='nav-item'>
                <a
                    id='nav-link'
                    href='#contact'
                    onClick={() => setCurrentPage('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link-active' : 'nav-link'}
                >
                    Contact
                </a>
            </li>
        </ul>
    );
}

export default Navigation;