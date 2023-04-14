import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid, Card, CardContent, Divider, CardHeader } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import personimg1 from "../images/person1.jpg";
import personimg2 from "../images/person2.jpg";
import Chip from "@mui/material/Chip";
import CakeIcon from "@mui/icons-material/Cake";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import {styled} from "@mui/material/styles";

import { Carousel } from 'react-bootstrap';


const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#e0d7d8',
    },
    '& .MuiRating-iconHover': {
        color: '#ff3d47',
    },
});

function BakerProfileSection(props) {
    const headerStyle = {
        backgroundColor: "#cca2a2",
        fontSize: "1rem",
        transition: "font-size 0.2s ease-in-out",
        textTransform: "none",

        color: "#f8f7f8"
    };

    return (

            <Grid container justify="center">

                    <Grid item xs={6}
                    >

                        <Card sx={{ borderRadius: 10, border: '3px solid #C27F85', boxShadow: '0px 20px 20px 0px rgba(0,0,0,0.25)',  marginLeft: "200px", marginRight: "1px", marginTop: "30px", height: '330px' }} elevation={0}
                        >
                            <CardHeader
                                style={headerStyle}
                                avatar={
                                    <Avatar alt={props.baker.name}
                                            src={props.baker.profilepicturepath}
                                            sx={{ width: 100, height: 100 }}/>
                                }
                                title={
                                    <div>
                                        <Typography variant="h6" component="div">
                                            <strong> {props.baker.name} from {props.baker.location}</strong>
                                        </Typography>
                                    </div>
                                }
                                subheader={
                                    <StyledRating
                                        size='small'
                                        name="example-rating"
                                        value={props.baker.rating}
                                        precision={0.5}
                                        readOnly
                                        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                        icon={<CakeIcon fontSize="inherit" />}
                                        emptyIcon={<CakeOutlinedIcon fontSize="inherit" />}
                                    />
                                }

                            >
                            </CardHeader>

                            <CardContent justify="center">
                                {props.baker.overview}

                            </CardContent>
                            <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
                                <Chip style={{ backgroundColor: '#cca2a2', color: 'white', height: '25px' }} size="large" label="gluten free" />
                                <Chip style={{ backgroundColor: '#cca2a2', color: 'white', height: '25px' }} size="large" label="lactose free" />
                                <Chip style={{ backgroundColor: '#cca2a2', color: 'white', height: '25px' }} size="large" label="vegan" />
                            </CardActions>

                        </Card>
                    </Grid>

                <Grid item xs={6} >
                    <Card sx={{ borderRadius: 10, border: '3px solid #C27F85', boxShadow: '0px 20px 20px 0px rgba(0,0,0,0.25)',   marginLeft: "1px", marginRight: "200px", marginTop: "30px", height: '330px'}} elevation={0}
                    >
                        <Divider sx={{ marginBottom: "10px", marginTop: "10px" }}>
                            <Chip style={{ backgroundColor: '#cca2a2', color: 'white',   height: '25px' }} size="large" label="LOCATION"  />
                        </Divider>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",

                            }}
                        >
                            <iframe
                                src={props.baker.map}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                style={{ borderRadius: '10px', border: '3px solid #C27F85' }}
                            ></iframe>
                        </div>
                        <Divider sx={{ marginBottom: "10px", marginTop: "10px" }}>
                            <Chip style={{ backgroundColor: '#cca2a2', color: 'white',   height: '25px' }} size="large" label="REVIEW" />
                        </Divider>
                        <div style={{ border: "0", display: "flex", alignItems: "center", maxWidth: "100%" }}>


                            <Typography style={{fontStyle: 'italic'}}>
                                {props.baker.review}
                            </Typography>

                    </div>



</Card>
                </Grid>

            </Grid>


    )}








export default BakerProfileSection;
