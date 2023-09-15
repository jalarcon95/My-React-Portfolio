import React from 'react';
import './About.css';
import profilepic from '../../assets/profilepic.jpg'
import CardMedia from '@mui/material/CardMedia';

export default function About() {
    return (
        <>
            <div className='image-container'>
                <CardMedia
                    component='img'
                    className='color-img'
                    style={{
                        height:'200px',
                        width:'150px',
                        margin: '0 auto',
                        paddingTop: '50px',
                    }}
                    image={profilepic}
                    alt='About Me'
                /> 
            </div>

            <div style={{width: '80%', margin: '0 auto'}}>
                <h1 id='about-me-title'>About Me</h1>
                <p id='p-about'>

                </p>
                <p id='p-about'>
                    
                </p>
                <p id='p-about'>
                    
                </p>
            </div>
        </>
    );
}