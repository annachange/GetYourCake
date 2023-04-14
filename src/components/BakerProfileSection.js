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
        color: '#d76999',
    },
    '& .MuiRating-iconHover': {
        color: '#ff3d47',
    },
});

function BakerProfileSection(props) {
    const headerStyle = {
        backgroundColor: "#ffd5d6",
        fontSize: "1rem",
        transition: "font-size 0.2s ease-in-out",
        textTransform: "none",
        color: "#060606"
    };

    return (

        <Grid container justify="center">

            <Grid item xs={6}
            >

                <Card sx={{ backgroundColor: '#ffd5d6', borderRadius: '20px 0 0 20px',  boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.25)',  marginLeft: "200px",  marginTop: "30px", height: '330px' }} elevation={0}
                >
                    <CardHeader
                        style={headerStyle}
                        avatar={
                            <Avatar alt={props.baker.name}
                                    src={props.baker.profilepicturepath}
                                    sx={{ width: 100, height: 100, border: '1px #060606'}}/>
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
                    <Chip sx={{ marginBottom: "12px", marginTop: "-20px" }} style={{ backgroundColor: '#d76999', color: 'white',   height: '25px' }} size="large" label="LOCATION"  />
                    <CardContent sx={{ bgcolor: '#ffd5d6' }} justify="center">

                        {props.baker.overview}

                    </CardContent>
                    <CardActions sx={{ bgcolor: '#ffd5d6', marginTop: "20px" }} style={{ display: 'flex', justifyContent: 'center' }}>
                        <Chip style={{ backgroundColor: '#d76999', color: 'white', height: '25px' }} size="large" label="gluten free" />
                        <Chip style={{ backgroundColor: '#d76999', color: 'white', height: '25px' }} size="large" label="lactose free" />
                        <Chip style={{ backgroundColor: '#d76999', color: 'white', height: '25px' }} size="large" label="vegan" />
                    </CardActions>

                </Card>
            </Grid>

            <Grid item xs={6} >
                <Card sx={{  borderRadius: '0 20px 20px 0',  boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.25)',    marginRight: "200px", marginTop: "30px", height: '330px'}} elevation={0}
                >

                        <Chip sx={{ marginBottom: "12px", marginTop: "12px" }} style={{ backgroundColor: '#d76999', color: 'white',   height: '25px' }} size="large" label="LOCATION"  />

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
                            style={{ borderRadius: '10px', border: '1px solid #060606' }}
                        ></iframe>
                    </div>

                        <Chip sx={{ marginBottom: "12px", marginTop: "12px" }} style={{ backgroundColor: '#d76999', color: 'white',   height: '25px' }} size="large" label="REVIEW" />

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
