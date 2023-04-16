import React, { useRef } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import hero from '../images/hero.jpg';

function HeroImage() {
    const targetRef = useRef(null);

    const handleClick = () => {
        targetRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <header
                style={{
                    paddingLeft: 0,
                    margin: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',


                }}

            >
                <div
                    className='p-5 text-center bg-image'
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1626078364657-3a6b568028b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80')",
                        height: 550,
                        width: 900,
                        backgroundSize: 'cover',
                        borderRadius: '20px',
                    }}
                >
                    <div
                        className='mask d-flex justify-content-center align-items-center h-100'
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)' }}
                    >
                        <div className='d-flex justify-content-center align-items-center h-100'>
                            <div className='text-white' ref={targetRef}>
                                <h1 className='mb-3'>
                                    <br />
                                    <br />
                                    Ordering a cake is a piece of cake
                                </h1>
                                <Button
                                    style={{ marginTop: '30px' }}
                                    sx={{ bgcolor: '#d76999' }}
                                    onClick={handleClick}
                                >
                                    FIND YOUR BAKER
                                </Button>
                                {/* <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                                    FIND YOUR BAKER
                                </a>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Grid id="scroll-to-grid"></Grid>
            <div ref={targetRef}></div>
        </>
    );
}

export default HeroImage;
