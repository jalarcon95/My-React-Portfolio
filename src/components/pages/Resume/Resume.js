import React from 'react';
import './Resume.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import PdfFile from '../../assets/john-alarcon-2023-resume.pdf';

export default function Resume() {
    return (
        <Box>
            <div>
                <a 
                    href={PdfFile}
                    download='John D. Alarcon Resume'
                    target='_blank'
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        paddingTop: '25px',
                    }}
                    rel='noreferrer'
                >
                    <Button id='resume-button' className='pop-on-hover'>
                        Click Here to Download Resume
                    </Button>
                </a>
                <h2
                style={{
                    display:'flex',
                    justifyContent: 'center',
                    textDecoration: 'underline',
                }}
                >
                Front-end Technologies
                </h2>
                <p
                    style={{
                        display:'flex',
                        justifyContent: 'center',
                        paddingRight: '100px',
                    }}
                >
                    - HTML
                    <br></br>- CSS
                    <br></br>- Javascript
                    <br></br>- React
                    <br></br>- Bootstrap
                </p>
                <h2
                    style={{
                        display:'flex',
                        justifyContent: 'center',
                        textDecoration: 'underline',
                    }}
                >
                    Back-end Technologies  
                </h2>
                <p
                    style={{
                        display:'flex',
                        justifyContent: 'center',
                        paddingRight: '100px',
                    }}
                >
                    - REST API's
                    <br></br>- Node.js
                    <br></br>- Express.js
                    <br></br>- MySQL
                    <br></br>- MongoDB
                    <br></br>- GraphQL
                </p>
            </div>
        </Box>
    );
}