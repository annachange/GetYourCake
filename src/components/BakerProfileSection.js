import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid, Card, CardContent, CardMedia, CardHeader } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import personimg1 from '../images/person1.jpg';


function BakerProfileSection(props) {
    const headerStyle = {
        backgroundColor: "#cca2a2",
    };

    return (

        <Box id="textSection" sx={{ padding: "20px" }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <Card sx={{ width: "80vw", borderRadius: 10, border: '3px solid #C27F85', boxShadow: '0px 20px 20px 0px rgba(0,0,0,0.25)' }}>
                <CardHeader
                    style={headerStyle}
                    avatar={
                        <Avatar
                            alt="Remy Sharp"
                            src={props.baker.profilepicturepath}
                            sx={{ width: 150, height: 150 }}
                        />
                    }
                    title={
                        <>
                        {props.baker.name}
                            <Rating name="example-rating" value={props.baker.rating} readOnly />
                        </>
                    }
                    subheader={props.baker.location}
                ></CardHeader>

                <CardContent>

                </CardContent>
                <CardActions>
                    {props.baker.overview}
                </CardActions>

            </Card>
        </Box>

    );
}

export default BakerProfileSection;
