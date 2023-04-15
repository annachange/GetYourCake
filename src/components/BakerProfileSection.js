//card with main details about baker including about, location, review parts

//included into BakerProfilePage


import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid, Card, CardContent, Divider, CardHeader } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import Chip from "@mui/material/Chip";
import CakeIcon from "@mui/icons-material/Cake";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import {styled} from "@mui/material/styles";



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
        color: "rgba(6,6,6,0.7)"
    };

    return (

        <Grid container justify="center">

            <Grid item xs={6}
            >

                <Card style={{ border: '1px solid #d76999' }} sx={{ backgroundColor: '#ffd5d6', borderRadius: '20px 0 0 20px',  boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.25)',  marginLeft: "200px",  marginTop: "30px", height: '350px' }} elevation={0}
                >
                    <CardHeader
                        style={headerStyle}
                        avatar={
                            <Avatar alt={props.baker.name}
                                    src={props.baker.profilepicturepath}
                                    sx={{ width: 150, height: 150}} style={{ border: '0.5px solid #d76999'}}/>
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
                    <Chip sx={{ marginTop: "-40px" }} style={{ backgroundColor: '#d76999', color: 'white',   height: '25px' }} size="large" label="ABOUT"  />
                    <CardContent sx={{ bgcolor: '#ffd5d6', marginTop: "-20px" }} justify="center">

                        {props.baker.overview}

                    </CardContent>


                </Card>
            </Grid>

            <Grid item xs={6} >
                <Card style={{ border: '1px solid #d76999' }}  sx={{  borderRadius: '0 20px 20px 0',  boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.25)',    marginRight: "200px", marginTop: "30px", height: '350px'}} elevation={0}
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
                            style={{ borderRadius: '10px', border: '1px solid #d76999' }}
                        ></iframe>
                    </div>

                        <Chip sx={{ marginBottom: "12px", marginTop: "20px" }} style={{ backgroundColor: '#d76999', color: 'white',   height: '25px' }} size="large" label="REVIEW" />

                    <div style={{ border: "0", display: "flex", alignItems: "center", maxWidth: "100%" }}>


                        <Typography style={{fontStyle: 'italic'}} sx={{ marginLeft: "10px", marginRight: "10px" }}>
                            {props.baker.review}
                        </Typography>

                    </div>



                </Card>
            </Grid>

        </Grid>


    )}








export default BakerProfileSection;
