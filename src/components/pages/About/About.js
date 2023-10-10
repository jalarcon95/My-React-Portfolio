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
                        height:'250px',
                        width:'200px',
                        margin: '0 auto',
                        paddingTop: '60px',
                    }}
                    image={profilepic}
                    alt='About Me'
                /> 
            </div>

            <div style={{width: '60%', margin: '0 auto'}}>
                <h1 id='about-me-title'>About Me</h1>
                <p id='p-about'>
                    Hello! I'm John Alarcon, a passionate web developer with a diverse background that sets me apart in the field. 
                    I recently completed the UCF Full Stack Developer Bootcamp, and I'm thrilled to embark on this exciting career transition into web development.
                </p>
                <p id='p-about'>
                    My journey has been shaped by my experiences in sales, finance, client relationships, and customer service across various industries, 
                    including banking, electronics retail, and residential real estate. Armed with a Bachelor's degree in Business Administration and a Florida Real Estate License, 
                    I've honed essential skills such as problem-solving, effective teamwork, data analysis, relationship building, and exceptional time management.
                    Throughout my professional journey, I've consistently leveraged technology to streamline processes and drive results. From CRM systems and banking software to email, 
                    MS Office Suite, databases, and mobile apps, I'm no stranger to working with diverse software tools. Now, I'm excited to expand my technical skill set and fully embrace the dynamic world of web development.
                    One of my core strengths is my ability to fast-track learning, and I relish the opportunity to thrive in the ever-evolving tech landscape.
                </p>
                <p id='p-about'>
                    Outside the world of web development, I'm an avid soccer enthusiast. I play weekly in a competitive league with friends and support Orlando's local MLS club, OCSC. 
                    I enjoy traveling, video games, and cooking for my family and friends. In my local community, I'm actively involved as a Certified Referee with USSF, officiating various levels of youth soccer.
                    I'm eager to bring my unique blend of skills, experiences, and enthusiasm to the world of web development, and I can't wait to see where this exciting journey takes me.
                </p>
            </div>
        </>
    );
}