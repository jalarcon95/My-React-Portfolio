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
                        paddingTop: '100px',
                    }}
                    image={profilepic}
                    alt='About Me'
                /> 
            </div>

            <div style={{width: '75%', margin: '0 auto'}}>
                <h1 id='about-me-title'>About Me</h1>
                <p id='p-about'>
                    Hello! My name is John Alarcon and I am an aspiring web developer that is currently enrolled in the 
                    UCF Full Stack Developer Bootcamp. I am excited to complete my career transition into the field of web development!
                 
                </p>
                <p id='p-about'>
                    My background is mainly focused in sales, finance, client relationships, and customer service. I've worked in banking, electronics retail, and residential real estate.  
                    I have a Bachelor's degree in Business Administration and a Florida Real Estate License. I've built a strong foundation in 
                    problem-solving, working in teams, data analysis, relationship building, and time management. Throughout my work experience, I have always leveraged
                    technology and have been comfortable working with various types of softwares like CRM, banking systems, email, MS Office, databases, mobile apps, etc.
                    Thus is my desire to expand my technical skillet and pursue a career as a web developer. I have always considered myself as a fast learner and am excited with
                    the prospect of learning and growing in the ever evolving world of tech.
                </p>
                <p id='p-about'>
                    
                    Outside of web development, I love to watch and play soccer. I enjoy playing weekly in a compeititve league with friends and I also enjoy 
                    supporting Orlando's local MLS club OCSC! I enjoy traveling, playing videogames, and cooking for my family & friends. I am also involved in my local community
                    by officiating in several different levels of youth soccer as a Certified Referee with USSF.
                    
                </p>
            </div>
        </>
    );
}