import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Radio from '@mui/material/Radio';
import { Grid, Card, CardContent, CardMedia, CardHeader } from '@mui/material';
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





import cakeimg1 from '../images/cake1.jpg';
import cakeimg2 from '../images/cake2.jpg';
import cakeimg3 from '../images/cake3.jpg';
import cakeimg4 from '../images/cake4.jpg';

import personimg1 from '../images/person1.jpg';
import img1 from "../images/image1.jpg";
import img2 from "../images/image2.jpg";
import img3 from "../images/image3.jpg";
import ComboBoxAnna from "./ComboBoxAnna";


const cakes = [
    { id: 1, src: cakeimg1, title: '50 EUR', description: 'This is pistachio' },
    { id: 2, src: cakeimg2, title: '25 EUR', description: 'This is rafaello' },
    { id: 3, src: cakeimg3, title: '25 EUR', description: 'This is red velvet' },
    { id: 4, src: cakeimg4, title: '35 EUR', description: 'This is snickers' },
];



function maincards() {

    const headerStyle = {
        backgroundColor: "#C27F85",
    };

    return (
        <div className="container">
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={4}>

                    <Card sx={{ maxWidth: 500 }}>
                        <CardHeader
                            style={headerStyle}
                            avatar={
                                <Avatar alt="Remy Sharp"
                                        src={personimg1}
                                        sx={{ width: 100, height: 100 }}/>
                            }

                            title={
                                <>
                                    Person 1&nbsp;
                                    <Rating name="example-rating" value={3} readOnly />
                                </>
                            }





                            subheader="Mustamäe, Tallinn"
                        >
                        </CardHeader>




                        <CardContent>
                            <ImageList sx={{ width: 380, height: 500 }}>
                                {cakes.map((item) => (
                                    <ImageListItem key={item.src}>
                                        <img
                                            src={`${item.src}?w=248&fit=crop&auto=format`}
                                            srcSet={`${item.src}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.title}
                                            loading="lazy"
                                        />
                                        <ImageListItemBar
                                            title={item.title}
                                            subtitle={item.description}
                                            position="below"
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>




                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>

                        </CardActions>
                    </Card>



                </Grid>
                <Grid item xs={4}>
                    <Card sx={{ maxWidth: 500 }}>
                        <CardHeader
                            style={headerStyle}
                            avatar={
                                <Avatar alt="Remy Sharp"
                                        src={personimg1}
                                        sx={{ width: 100, height: 100 }}/>
                            }

                            title={
                                <>
                                    Person 2&nbsp;
                                    <Rating name="example-rating" value={3} readOnly />
                                </>
                            }





                            subheader="Mustamäe, Tallinn"
                        >
                        </CardHeader>




                        <CardContent>
                            <ImageList sx={{ width: 380, height: 500 }}>
                                {cakes.map((item) => (
                                    <ImageListItem key={item.src}>
                                        <img
                                            src={`${item.src}?w=248&fit=crop&auto=format`}
                                            srcSet={`${item.src}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.title}
                                            loading="lazy"
                                        />
                                        <ImageListItemBar
                                            title={item.title}
                                            subtitle={item.description}
                                            position="below"
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>




                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>

                        </CardActions>
                    </Card>

                </Grid>
                <Grid item xs={4}>

                    <Card sx={{ maxWidth: 500 }}>
                        <CardHeader
                            style={headerStyle}
                            avatar={
                                <Avatar alt="Remy Sharp"
                                        src={personimg1}
                                        sx={{ width: 100, height: 100 }}/>
                            }

                            title={
                                <>
                                    Person 3&nbsp;
                                    <Rating name="example-rating" value={3} readOnly />
                                </>
                            }





                            subheader="Mustamäe, Tallinn"
                        >
                        </CardHeader>




                        <CardContent>
                            <ImageList sx={{ width: 380, height: 500 }}>
                                {cakes.map((item) => (
                                    <ImageListItem key={item.src}>
                                        <img
                                            src={`${item.src}?w=248&fit=crop&auto=format`}
                                            srcSet={`${item.src}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.title}
                                            loading="lazy"
                                        />
                                        <ImageListItemBar
                                            title={item.title}
                                            subtitle={item.description}
                                            position="below"
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>




                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>

                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{ maxWidth: 500 }}>
                        <CardHeader
                            style={headerStyle}
                            avatar={
                                <Avatar alt="Remy Sharp"
                                        src={personimg1}
                                        sx={{ width: 100, height: 100 }}/>
                            }

                            title={
                                <>
                                    Person 4&nbsp;
                                    <Rating name="example-rating" value={3} readOnly />
                                </>
                            }





                            subheader="Mustamäe, Tallinn"
                        >
                        </CardHeader>




                        <CardContent>
                            <ImageList sx={{ width: 380, height: 500 }}>
                                {cakes.map((item) => (
                                    <ImageListItem key={item.src}>
                                        <img
                                            src={`${item.src}?w=248&fit=crop&auto=format`}
                                            srcSet={`${item.src}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.title}
                                            loading="lazy"
                                        />
                                        <ImageListItemBar
                                            title={item.title}
                                            subtitle={item.description}
                                            position="below"
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>




                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>

                        </CardActions>
                    </Card>

                </Grid>
                <Grid item xs={4}>
                    <Card sx={{ maxWidth: 500 }}>
                        <CardHeader
                            style={headerStyle}
                            avatar={
                                <Avatar alt="Remy Sharp"
                                        src={personimg1}
                                        sx={{ width: 100, height: 100 }}/>
                            }

                            title={
                                <>
                                    Person 5&nbsp;
                                    <Rating name="example-rating" value={3} readOnly />
                                </>
                            }





                            subheader="Mustamäe, Tallinn"
                        >
                        </CardHeader>




                        <CardContent>
                            <ImageList sx={{ width: 380, height: 500 }}>
                                {cakes.map((item) => (
                                    <ImageListItem key={item.src}>
                                        <img
                                            src={`${item.src}?w=248&fit=crop&auto=format`}
                                            srcSet={`${item.src}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.title}
                                            loading="lazy"
                                        />
                                        <ImageListItemBar
                                            title={item.title}
                                            subtitle={item.description}
                                            position="below"
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>




                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>

                        </CardActions>
                    </Card>

                </Grid>
                <Grid item xs={4}>
                    <Card sx={{ maxWidth: 500 }}>
                        <CardHeader
                            style={headerStyle}
                            avatar={
                                <Avatar alt="Remy Sharp"
                                        src={personimg1}
                                        sx={{ width: 100, height: 100 }}/>
                            }

                            title={
                                <>
                                    Person 6&nbsp;
                                    <Rating name="example-rating" value={3} readOnly />
                                </>
                            }





                            subheader="Mustamäe, Tallinn"
                        >
                        </CardHeader>




                        <CardContent>
                            <ImageList sx={{ width: 380, height: 500 }}>
                                {cakes.map((item) => (
                                    <ImageListItem key={item.src}>
                                        <img
                                            src={`${item.src}?w=248&fit=crop&auto=format`}
                                            srcSet={`${item.src}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.title}
                                            loading="lazy"
                                        />
                                        <ImageListItemBar
                                            title={item.title}
                                            subtitle={item.description}
                                            position="below"
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>




                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>

                        </CardActions>
                    </Card>

                </Grid>

            </Grid>

        </div>



    );
}

export default maincards;