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

function BakerProfileSection() {
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
                                    <Avatar alt="Remy Sharp"
                                            src={personimg1}
                                            sx={{ width: 100, height: 100 }}/>
                                }
                                title={
                                    <div>
                                        <Typography variant="h6" component="div">
                                            <strong> Maria from Tartu</strong>
                                        </Typography>
                                    </div>
                                }
                                subheader={
                                    <StyledRating
                                        size='small'
                                        name="example-rating"
                                        value={4.5}
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
                                With 15+ years of experience, I'm a passionate baker dedicated to creating delicious and beautiful baked goods. For the best quality, please place your order at least 24 hours in advance.

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
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8114.724513243031!2d24.7508183!3d59.4383926!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46929361741d52e1%3A0xfbe21956f9672088!2sBCS%20Koolitus!5e0!3m2!1set!2see!4v1681391315300!5m2!1set!2see"
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
                                I had the pleasure of working with Maria for my wedding
                                cake, and I couldn't have been happier with the final
                                product.
                            </Typography>

                    </div>



</Card>
                </Grid>

            </Grid>


    )}








export default BakerProfileSection;
