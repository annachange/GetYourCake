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

import personImg1 from '../src/images/person1.jpg';
import personImg2 from '../src/images/person2.jpg';
import personImg3 from '../src/images/person3.jpg';
import personImg4 from '../src/images/person4.jpg';
import personImg5 from '../src/images/person5.jpg';
import personImg6 from '../src/images/person6.jpg';

import cakeimg1 from '../src/images/cake1.jpg';
import cakeimg2 from '../src/images/cake2.jpg';
import cakeimg3 from '../src/images/cake3.jpg';
import cakeimg4 from '../src/images/cake4.jpg';

const bakersData = [
    {
        id: 1,
        name: 'Maria',
        profilePicture: personImg1,
        location: 'Tallinn',
        intoleranceOptions: ['gluten-free', 'lactose-free'],
        productPictures: [
            { id: 1, src: 'cakeimg1', title: '50 EUR', description: 'This is pistachio' },
            { id: 2, src: 'cakeimg2', title: '25 EUR', description: 'This is rafaello' },
            { id: 3, src: 'cakeimg3', title: '25 EUR', description: 'This is red velvet' },
            { id: 4, src: 'cakeimg4', title: '35 EUR', description: 'This is snickers' }
        ]
    },

    {
        id: 2,
        name: 'Anni Marie',
        profilePicture: personImg2,
        location: 'Tallinn',
        intoleranceOptions: ['gluten-free', 'free-range eggs only'],
        productPictures: [
            { id: 1, src: 'cakeimg1', title: '55 EUR', description: 'This is pistachio' },
            { id: 2, src: 'cakeimg2', title: '30 EUR', description: 'This is rafaello' },
            { id: 3, src: 'cakeimg3', title: '30 EUR', description: 'This is red velvet' },
            { id: 4, src: 'cakeimg4', title: '40 EUR', description: 'This is snickers' }
        ]
    },

    {
        id: 3,
        name: 'Helen',
        profilePicture: personImg3,
        location: 'Tartu',
        intoleranceOptions: [''],
        productPictures: [
            { id: 1, src: 'cakeimg1', title: '50 EUR', description: 'This is pistachio' },
            { id: 2, src: 'cakeimg2', title: '25 EUR', description: 'This is rafaello' },
            { id: 3, src: 'cakeimg3', title: '25 EUR', description: 'This is red velvet' },
            { id: 4, src: 'cakeimg4', title: '35 EUR', description: 'This is snickers' }
        ]
    },

    {
        id: 4,
        name: 'Anna',
        profilePicture: personImg4,
        location: 'Kuressaare',
        intoleranceOptions: ['vegan', 'no artificial colorings', 'gluten-free', 'lactose-free'],
        productPictures: [
            { id: 1, src: 'cakeimg1', title: '50 EUR', description: 'This is pistachio' },
            { id: 2, src: 'cakeimg2', title: '25 EUR', description: 'This is rafaello' },
            { id: 3, src: 'cakeimg3', title: '25 EUR', description: 'This is red velvet' },
            { id: 4, src: 'cakeimg4', title: '35 EUR', description: 'This is snickers' }
        ]
    },

    {
        id: 5,
        name: 'Gretlin',
        profilePicture: personImg5,
        location: 'Viljandi',
        intoleranceOptions: ['free-range eggs only', 'gluten-free', 'vegan'],
        productPictures: [
            { id: 1, src: 'cakeimg1', title: '50 EUR', description: 'This is pistachio' },
            { id: 2, src: 'cakeimg2', title: '25 EUR', description: 'This is rafaello' },
            { id: 3, src: 'cakeimg3', title: '25 EUR', description: 'This is red velvet' },
            { id: 4, src: 'cakeimg4', title: '35 EUR', description: 'This is snickers' }
        ]
    },

    {
        id: 6,
        name: 'Roman-Sten',
        profilePicture: personImg6,
        location: 'Pärnu',
        intoleranceOptions: ['vegan', 'lactose-free'],
        productPictures: [
            { id: 1, src: 'cakeimg1', title: '50 EUR', description: 'This is pistachio' },
            { id: 2, src: 'cakeimg2', title: '25 EUR', description: 'This is rafaello' },
            { id: 3, src: 'cakeimg3', title: '25 EUR', description: 'This is red velvet' },
            { id: 4, src: 'cakeimg4', title: '35 EUR', description: 'This is snickers' }
        ]
    },


function cardsBeforeData() {

    const headerStyle = {
        backgroundColor: "#C27F85",
    };

        return (
            // <div className="container">
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {bakersData.map(baker => (
                        <Grid item xs={4}>
                        <Card sx={{ maxWidth: 500 }}>
                                <CardHeader key={index}
                                    style={headerStyle}
                                    avatar={
                                        <Avatar alt="Remy Sharp"
                                                src={baker.profilePicture} // Does this already show the profile picture=
                                                sx={{ width: 100, height: 100 }}/>
                                    }

                                    title={
                                        <>
                                            {baker.name}
                                            <Rating name="example-rating" value={3} readOnly />
                                        </>
                                    }

                                    subheader={baker.location}
                                >
                                </CardHeader>
                                <CardContent>
                                <ImageList sx={{ width: 380, height: 500 }}>
                            {baker.productPictures.map((item) => (
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
                    </Grid>))}
                </Grid>
        );
    };

    export default cardsBeforeData;