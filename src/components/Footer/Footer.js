import React from 'react';
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import './Footer.css';

const Footer = () => {
    return (
        <div style={{ paddingTop: '50px', paddingBottom: '50px'}}>
            <Grid
                style={{ display:'flex', justifyContent: 'center'}}
                container
                sx= {{ color: 'text.primary'}}
            >
                <Grid
                    style={{ display: 'flex', justifyContent: 'space-evenly'}}
                    item
                    xs={4}
                >
                    <GitHubIcon
                        id='icon'
                        className='pop-on-hover'
                        sx={{ fontSize: 60}}
                        onClick={(event) =>
                            (window.location.href = 'https://github.com/jalarcon95')
                        }
                        />
                     <LinkedInIcon
                        id='icon'
                        className='pop-on-hover'
                        sx={{ fontSize: 60}}
                        onClick={(event) =>
                            (window.location.href = 'https://www.linkedin.com/in/john-alarcon95/')
                        }
                        />
                     <EmailIcon
                        id='icon'
                        className='pop-on-hover'
                        sx={{ fontSize: 60}}
                        onClick={(event) =>
                            (window.location.href = 'mailto: j.alarcon@outlook.com')
                        }
                        />
                </Grid>
            </Grid>
        </div>
    );
};

export default Footer;