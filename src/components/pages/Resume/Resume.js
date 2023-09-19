import React from 'react';
import './Resume.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import PdfFile from '../../assets/My-Resume-2023.pdf';

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
            </div>
            <h2
                style={{
                    display:'flex',
                    justifyContent: 'center',
                }}
            >
                
            </h2>
        </Box>
    )
}