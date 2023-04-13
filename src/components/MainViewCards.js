import React, { useState, useContext } from 'react';
import {GetYourCakeContext} from "../utils/GetYourCakeContext";
import { Grid, Card, CardContent, CardMedia, CardHeader, Box } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

import Rating from '@mui/material/Rating';
import CakeLoop from "./CakeLoop";
import {Link} from "react-router-dom";

import { styled } from '@mui/material/styles';
import CakeIcon from '@mui/icons-material/Cake';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import Typography from '@mui/material/Typography';

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#e0d7d8',
    },
    '& .MuiRating-iconHover': {
        color: '#ff3d47',
    },
});




function MainCards() {

    const gyc = useContext(GetYourCakeContext);  //it contains bakers and cakes
    // console.log(gyc)
    // console.log(gyc.bakers)
    // console.log(gyc.cakes)

    const headerStyle = {
        backgroundColor: "#cca2a2",
    };

    const handleClick = () => {
        window.scrollTo(0, 0);
    };

    return (

        <Grid justifyContent="center" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

            {gyc.bakers.map((baker, index) => {

                let url = 'bakerProfilePage/'+ baker.id
                return (
                    <Grid item xs={4} key={index}>
                        <Card sx={{ maxWidth: 400, borderRadius: 16, border: '3px solid #C27F85', boxShadow: '0px 20px 20px 0px rgba(0,0,0,0.25)'}} >
                            <CardHeader
                                style={headerStyle}
                                avatar={
                                    <Avatar alt={baker.name}
                                            src={baker.profilepicturepath}
                                            sx={{ width: 100, height: 100 }}/>
                                }

                                title={

                                        <div>
                                            <Typography variant="h6" component="div">
                                                {baker.name} from  {baker.location}
                                            </Typography>
                                        </div>

                                }
                                subheader={
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <StyledRating
                                            name="example-rating"
                                            value={baker.rating}
                                            precision={0.5}
                                            readOnly
                                            getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                            icon={<CakeIcon fontSize="inherit" />}
                                            emptyIcon={<CakeOutlinedIcon fontSize="inherit" />}
                                        />


                                    </div>
                                }

                                // action={
                                //
                                //     <div style={{ display: 'flex', justifyContent: 'center' }}>
                                //
                                // <StyledRating
                                //
                                //     name="example-rating"
                                //     value={baker.rating}
                                //     precision={0.5}
                                //     readOnly
                                //     getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                //     icon={<CakeIcon fontSize="inherit" />}
                                //     emptyIcon={<CakeOutlinedIcon fontSize="inherit" />}
                                //
                                // /> </div>
                                //
                                //
                                //     }
                            >
                            </CardHeader>




                            <CardContent sx={{ width: 380, height: 470 }}>
                                {/*<ImageList sx={{ width: 380, height: 500 }}>*/}
                                {/*    {cakes.map((item) => (*/}
                                {/*        <ImageListItem key={item.src}>*/}
                                {/*            <img*/}
                                {/*                src={`${item.src}?w=248&fit=crop&auto=format`}*/}
                                {/*                srcSet={`${item.src}?w=248&fit=crop&auto=format&dpr=2 2x`}*/}
                                {/*                alt={item.title}*/}
                                {/*                loading="lazy"*/}
                                {/*            />*/}
                                {/*            <ImageListItemBar*/}
                                {/*                title={item.title}*/}
                                {/*                subtitle={item.description}*/}
                                {/*                position="below"*/}
                                {/*            />*/}
                                {/*        </ImageListItem>*/}
                                {/*    ))}*/}
                                {/*</ImageList>*/}


                                <CakeLoop baker={baker.id}/>

                            </CardContent>
                            <CardActions sx={{ justifyContent: 'center' }}>
                                <Button component={Link} to={url} onClick={handleClick}>Check out all cakes</Button>

                            </CardActions>
                        </Card>

                    </Grid>

                )
            })}






                {/*    <Grid item xs={4}>*/}
                {/*        <Card sx={{ maxWidth: 400, borderRadius: 16, border: '3px solid #C27F85', boxShadow: '0px 20px 20px 0px rgba(0,0,0,0.25)'}} >*/}
                {/*            <CardHeader*/}
                {/*                style={headerStyle}*/}
                {/*                avatar={*/}
                {/*                    <Avatar alt="Remy Sharp"*/}
                {/*                            src={personimg1}*/}
                {/*                            sx={{ width: 100, height: 100 }}/>*/}
                {/*                }*/}
                {/*                title={*/}
                {/*                    <>*/}
                {/*                        Person 6&nbsp;*/}
                {/*                        <Rating name="example-rating" value={3} readOnly />*/}
                {/*                    </>*/}
                {/*                }*/}
                {/*                subheader="Mustamäe, Tallinn"*/}
                {/*            >*/}
                {/*            </CardHeader>*/}




                {/*            <CardContent sx={{ width: 380, height: 470 }}>*/}
                {/*                <ImageList sx={{ width: 380, height: 500 }}>*/}
                {/*                    {cakes.map((item) => (*/}
                {/*                        <ImageListItem key={item.src}>*/}
                {/*                            <img*/}
                {/*                                src={`${item.src}?w=248&fit=crop&auto=format`}*/}
                {/*                                srcSet={`${item.src}?w=248&fit=crop&auto=format&dpr=2 2x`}*/}
                {/*                                alt={item.title}*/}
                {/*                                loading="lazy"*/}
                {/*                            />*/}
                {/*                            <ImageListItemBar*/}
                {/*                                title={item.title}*/}
                {/*                                subtitle={item.description}*/}
                {/*                                position="below"*/}
                {/*                            />*/}
                {/*                        </ImageListItem>*/}
                {/*                    ))}*/}
                {/*                </ImageList>*/}




                {/*            </CardContent>*/}
                {/*            <CardActions sx={{ justifyContent: 'center' }}>*/}
                {/*                <Button>Check out all cakes</Button>*/}

                {/*            </CardActions>*/}
                {/*        </Card>*/}

                {/*    </Grid>*/}
                {/*    <Grid item xs={4}>*/}
                {/*        <Card sx={{ maxWidth: 400, borderRadius: 16, border: '3px solid #C27F85', boxShadow: '0px 20px 20px 0px rgba(0,0,0,0.25)'}} >*/}
                {/*            <CardHeader*/}
                {/*                style={headerStyle}*/}
                {/*                avatar={*/}
                {/*                    <Avatar alt="Remy Sharp"*/}
                {/*                            src={personimg1}*/}
                {/*                            sx={{ width: 100, height: 100 }}/>*/}
                {/*                }*/}
                {/*                title={*/}
                {/*                    <>*/}
                {/*                        Person 6&nbsp;*/}
                {/*                        <Rating name="example-rating" value={3} readOnly />*/}
                {/*                    </>*/}
                {/*                }*/}
                {/*                subheader="Mustamäe, Tallinn"*/}
                {/*            >*/}
                {/*            </CardHeader>*/}




                {/*            <CardContent sx={{ width: 380, height: 470 }}>*/}
                {/*                <ImageList sx={{ width: 380, height: 500 }}>*/}
                {/*                    {cakes.map((item) => (*/}
                {/*                        <ImageListItem key={item.src}>*/}
                {/*                            <img*/}
                {/*                                src={`${item.src}?w=248&fit=crop&auto=format`}*/}
                {/*                                srcSet={`${item.src}?w=248&fit=crop&auto=format&dpr=2 2x`}*/}
                {/*                                alt={item.title}*/}
                {/*                                loading="lazy"*/}
                {/*                            />*/}
                {/*                            <ImageListItemBar*/}
                {/*                                title={item.title}*/}
                {/*                                subtitle={item.description}*/}
                {/*                                position="below"*/}
                {/*                            />*/}
                {/*                        </ImageListItem>*/}
                {/*                    ))}*/}
                {/*                </ImageList>*/}




                {/*            </CardContent>*/}
                {/*            <CardActions sx={{ justifyContent: 'center' }}>*/}
                {/*                <Button>Check out all cakes</Button>*/}

                {/*            </CardActions>*/}
                {/*        </Card>*/}

                {/*    </Grid>*/}
                {/*<Grid item xs={4}>*/}
                {/*    <Card sx={{ maxWidth: 400, borderRadius: 16, border: '3px solid #C27F85', boxShadow: '0px 20px 20px 0px rgba(0,0,0,0.25)'}} >*/}
                {/*        <CardHeader*/}
                {/*            style={headerStyle}*/}
                {/*            avatar={*/}
                {/*                <Avatar alt="Remy Sharp"*/}
                {/*                        src={personimg1}*/}
                {/*                        sx={{ width: 100, height: 100 }}/>*/}
                {/*            }*/}
                {/*            title={*/}
                {/*                <>*/}
                {/*                    Person 6&nbsp;*/}
                {/*                    <Rating name="example-rating" value={3} readOnly />*/}
                {/*                </>*/}
                {/*            }*/}
                {/*            subheader="Mustamäe, Tallinn"*/}
                {/*        >*/}
                {/*        </CardHeader>*/}




                {/*        <CardContent sx={{ width: 380, height: 470 }}>*/}
                {/*            <ImageList sx={{ width: 380, height: 500 }}>*/}
                {/*                {cakes.map((item) => (*/}
                {/*                    <ImageListItem key={item.src}>*/}
                {/*                        <img*/}
                {/*                            src={`${item.src}?w=248&fit=crop&auto=format`}*/}
                {/*                            srcSet={`${item.src}?w=248&fit=crop&auto=format&dpr=2 2x`}*/}
                {/*                            alt={item.title}*/}
                {/*                            loading="lazy"*/}
                {/*                        />*/}
                {/*                        <ImageListItemBar*/}
                {/*                            title={item.title}*/}
                {/*                            subtitle={item.description}*/}
                {/*                            position="below"*/}
                {/*                        />*/}
                {/*                    </ImageListItem>*/}
                {/*                ))}*/}
                {/*            </ImageList>*/}




                {/*        </CardContent>*/}
                {/*        <CardActions sx={{ justifyContent: 'center' }}>*/}
                {/*            <Button>Check out all cakes</Button>*/}

                {/*        </CardActions>*/}
                {/*    </Card>*/}

                {/*</Grid>*/}
                {/*<Grid item xs={4}>*/}
                {/*    <Card sx={{ maxWidth: 400, borderRadius: 16, border: '3px solid #C27F85', boxShadow: '0px 20px 20px 0px rgba(0,0,0,0.25)'}} >*/}
                {/*        <CardHeader*/}
                {/*            style={headerStyle}*/}
                {/*            avatar={*/}
                {/*                <Avatar alt="Remy Sharp"*/}
                {/*                        src={personimg1}*/}
                {/*                        sx={{ width: 100, height: 100 }}/>*/}
                {/*            }*/}
                {/*            title={*/}
                {/*                <>*/}
                {/*                    Person 6&nbsp;*/}
                {/*                    <Rating name="example-rating" value={3} readOnly />*/}
                {/*                </>*/}
                {/*            }*/}
                {/*            subheader="Mustamäe, Tallinn"*/}
                {/*        >*/}
                {/*        </CardHeader>*/}




                {/*        <CardContent sx={{ width: 380, height: 470 }}>*/}
                {/*            <ImageList sx={{ width: 380, height: 500 }}>*/}
                {/*                {cakes.map((item) => (*/}
                {/*                    <ImageListItem key={item.src}>*/}
                {/*                        <img*/}
                {/*                            src={`${item.src}?w=248&fit=crop&auto=format`}*/}
                {/*                            srcSet={`${item.src}?w=248&fit=crop&auto=format&dpr=2 2x`}*/}
                {/*                            alt={item.title}*/}
                {/*                            loading="lazy"*/}
                {/*                        />*/}
                {/*                        <ImageListItemBar*/}
                {/*                            title={item.title}*/}
                {/*                            subtitle={item.description}*/}
                {/*                            position="below"*/}
                {/*                        />*/}
                {/*                    </ImageListItem>*/}
                {/*                ))}*/}
                {/*            </ImageList>*/}




                {/*        </CardContent>*/}
                {/*        <CardActions sx={{ justifyContent: 'center' }}>*/}
                {/*            <Button>Check out all cakes</Button>*/}

                {/*        </CardActions>*/}
                {/*    </Card>*/}

                {/*</Grid>*/}
                {/*<Grid item xs={4}>*/}
                {/*    <Card sx={{ maxWidth: 400, borderRadius: 16, border: '3px solid #C27F85', boxShadow: '0px 20px 20px 0px rgba(0,0,0,0.25)'}} >*/}
                {/*        <CardHeader*/}
                {/*            style={headerStyle}*/}
                {/*            avatar={*/}
                {/*                <Avatar alt="Remy Sharp"*/}
                {/*                        src={personimg1}*/}
                {/*                        sx={{ width: 100, height: 100 }}/>*/}
                {/*            }*/}
                {/*            title={*/}
                {/*                <>*/}
                {/*                    Person 6&nbsp;*/}
                {/*                    <Rating name="example-rating" value={3} readOnly />*/}
                {/*                </>*/}
                {/*            }*/}
                {/*            subheader="Mustamäe, Tallinn"*/}
                {/*        >*/}
                {/*        </CardHeader>*/}




                {/*        <CardContent sx={{ width: 380, height: 470 }}>*/}
                {/*            <ImageList sx={{ width: 380, height: 500 }}>*/}
                {/*                {cakes.map((item) => (*/}
                {/*                    <ImageListItem key={item.src}>*/}
                {/*                        <img*/}
                {/*                            src={`${item.src}?w=248&fit=crop&auto=format`}*/}
                {/*                            srcSet={`${item.src}?w=248&fit=crop&auto=format&dpr=2 2x`}*/}
                {/*                            alt={item.title}*/}
                {/*                            loading="lazy"*/}
                {/*                        />*/}
                {/*                        <ImageListItemBar*/}
                {/*                            title={item.title}*/}
                {/*                            subtitle={item.description}*/}
                {/*                            position="below"*/}
                {/*                        />*/}
                {/*                    </ImageListItem>*/}
                {/*                ))}*/}
                {/*            </ImageList>*/}




                {/*        </CardContent>*/}
                {/*        <CardActions sx={{ justifyContent: 'center' }}>*/}
                {/*            <Button>Check out all cakes</Button>*/}

                {/*        </CardActions>*/}
                {/*    </Card>*/}

                {/*</Grid>*/}

            </Grid>





    );
}

export default MainCards;