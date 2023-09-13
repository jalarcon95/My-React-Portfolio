import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css';

export default function Header({ currentPage, setCurrentPage}) {
    return (
        <div className='headerParent' style={{ padding: '0px 0px 15px 50px'}}>
            <p id='header-text'>John D. Alarcon</p>
            <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </div>
    );
}