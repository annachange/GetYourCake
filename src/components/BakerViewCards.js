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



function bakercards() {


    return (
        <div className="container">
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={4}>
                    <Card sx={{ height: 350, width: 350, borderRadius: 10, border: '3px solid #C27F85', boxShadow: '0px 20px 20px 0px rgba(0,0,0,0.25)'}}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                            <CardMedia
                                sx={{ width: 250, height: 250 }}
                                image={cakeimg1}
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Spiderman
                                </Typography>

                            </CardContent>
                            <CardActions>
                                <Button size="small">Order</Button>
                            </CardActions>
                        </div>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{ height: 350, width: 350, borderRadius: 10, border: '3px solid #C27F85', boxShadow: '0px 20px 20px 0px rgba(0,0,0,0.25)'}}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                            <CardMedia
                                sx={{ width: 250, height: 250 }}
                                image={cakeimg1}
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Spiderman
                                </Typography>

                            </CardContent>
                            <CardActions>
                                <Button size="small">Order</Button>
                            </CardActions>
                        </div>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{ height: 350, width: 350, borderRadius: 10, border: '3px solid #C27F85', boxShadow: '0px 20px 20px 0px rgba(0,0,0,0.25)'}}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                            <CardMedia
                                sx={{ width: 250, height: 250 }}
                                image={cakeimg1}
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Spiderman
                                </Typography>

                            </CardContent>
                            <CardActions>
                                <Button size="small">Order</Button>
                            </CardActions>
                        </div>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{ height: 350, width: 350, borderRadius: 10, border: '3px solid #C27F85', boxShadow: '0px 20px 20px 0px rgba(0,0,0,0.25)'}}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                            <CardMedia
                                sx={{ width: 250, height: 250 }}
                                image={cakeimg1}
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Spiderman
                                </Typography>

                            </CardContent>
                            <CardActions>
                                <Button size="small">Order</Button>
                            </CardActions>
                        </div>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{ height: 350, width: 350, borderRadius: 10, border: '3px solid #C27F85', boxShadow: '0px 20px 20px 0px rgba(0,0,0,0.25)'}}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                            <CardMedia
                                sx={{ width: 250, height: 250 }}
                                image={cakeimg1}
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Spiderman
                                </Typography>

                            </CardContent>
                            <CardActions>
                                <Button size="small">Order</Button>
                            </CardActions>
                        </div>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card sx={{ height: 350, width: 350, borderRadius: 10, border: '3px solid #C27F85', boxShadow: '0px 20px 20px 0px rgba(0,0,0,0.25)'}}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                            <CardMedia
                                sx={{ width: 250, height: 250 }}
                                image={cakeimg1}
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Spiderman
                                </Typography>

                            </CardContent>
                            <CardActions>
                                <Button size="small">Order</Button>
                            </CardActions>
                        </div>
                    </Card>
                </Grid>

            </Grid>

        </div>



    );
}

export default bakercards;