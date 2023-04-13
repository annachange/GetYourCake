import React, { useState, useContext } from 'react';
import {GetYourCakeContext} from "../utils/GetYourCakeContext";

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Radio from '@mui/material/Radio';
import { Grid, Card, CardContent, CardMedia, CardHeader, Box } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Rating from '@mui/material/Rating';



function MainCards() {

    const gyc = useContext(GetYourCakeContext);  //it contains bakers and cakes
    console.log(gyc)
    console.log(gyc.bakers)
    console.log(gyc.cakes)

    const headerStyle = {
        backgroundColor: "#cca2a2",
    };

    return (

        <Grid justifyContent="center" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

            {gyc.bakers.map((baker, index) => {
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
                                    <>
                                        {baker.name}
                                        <Rating name="example-rating" value={baker.rating} readOnly />
                                    </>
                                }
                                subheader= {baker.location}
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

                            </CardContent>
                            <CardActions sx={{ justifyContent: 'center' }}>
                                <Button>Check out all cakes</Button>

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