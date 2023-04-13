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


function BakerProfileSection() {
    const headerStyle = {
        backgroundColor: "#cca2a2",
    };

    return (

<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
<Grid item xs={4}>
<Box id="textSection" sx={{ padding: "20px" }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <Card sx={{ width: "30vw", borderRadius: 10, border: '3px solid #C27F85', boxShadow: '0px 20px 20px 0px rgba(0,0,0,0.25)' }}>
                <CardHeader
                    style={headerStyle}
                    avatar={
                        <Avatar
                            alt="Remy Sharp"
                            src={personimg1}
                            sx={{ width: 150, height: 150 }}
                        />
                    }
                    title={
                        <>
                            Maria's Bakery&nbsp;
                            <Rating name="example-rating" value={3} readOnly />
                        </>
                    }
                    subheader="Mustamäe, Tallinn"
                ></CardHeader>

                <CardContent>

                </CardContent>
                <CardActions>
                    <p>20 years of experience in baking. <br /> Make sure to place your order at least 24h before!</p>
                </CardActions>
                <CardActions>
                    <p></p>
                </CardActions>
            </Card>
        </Box>
</Grid>
<Grid item xs={4}>
<Box id="textSection" sx={{ padding: "20px" }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <Card sx={{ width: "30vw", borderRadius: 10, border: '3px solid #C27F85', boxShadow: '0px 20px 20px 0px rgba(0,0,0,0.25)' }}>
                <CardHeader
                    style={headerStyle}
                    avatar={
                        <Avatar
                            alt="Remy Sharp"
                            src={personimg1}
                            sx={{ width: 150, height: 150 }}
                        />
                    }
                    title={
                        <>
                            Maria's Bakery&nbsp;
                            <Rating name="example-rating" value={3} readOnly />
                        </>
                    }
                    subheader="Mustamäe, Tallinn"
                ></CardHeader>

                <CardContent>

                </CardContent>
                <CardActions>
                    <p>20 years of experience in baking. <br /> Make sure to place your order at least 24h before!</p>
                </CardActions>
                <CardActions>
                    <p></p>
                </CardActions>
            </Card>
        </Box>
</Grid>
<Grid item xs={4}>
<Box id="textSection" sx={{ padding: "20px" }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <Card sx={{ width: "30vw", borderRadius: 10, border: '3px solid #C27F85', boxShadow: '0px 20px 20px 0px rgba(0,0,0,0.25)' }}>
                <CardHeader
                    style={headerStyle}
                    avatar={
                        <Avatar
                            alt="Remy Sharp"
                            src={personimg1}
                            sx={{ width: 150, height: 150 }}
                        />
                    }
                    title={
                        <>
                            Maria's Bakery&nbsp;
                            <Rating name="example-rating" value={3} readOnly />
                        </>
                    }
                    subheader="Mustamäe, Tallinn"
                ></CardHeader>

                <CardContent>

                </CardContent>
                <CardActions>
                    <p>20 years of experience in baking. <br /> Make sure to place your order at least 24h before!</p>
                </CardActions>
                <CardActions>
                    <p></p>
                </CardActions>
            </Card>
        </Box>
</Grid>

</Grid>

    );
}

export default BakerProfileSection;
