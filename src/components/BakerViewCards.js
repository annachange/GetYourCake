import React, {useContext, useState} from 'react';
import { Grid, Card, CardContent, CardMedia, CardHeader } from '@mui/material';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import {GetYourCakeContext} from "../utils/GetYourCakeContext";
import {Link} from "react-router-dom";


function BakerCards(props) {

    const gyc = useContext(GetYourCakeContext);
    const handleClick = () => {
        window.scrollTo(0, 0);
    };

    return (
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}  sx={{ padding: '30px', justify: 'center'}}>

                {props.cakes.map((cake, index) => {

                    let url = '/ProductSelectionPage/' + cake.id

                    return (

                <Grid item xs={4} key={index}>
                    <Card sx={{ height: 350, width: 350, borderRadius: 10, border: '3px solid #C27F85', boxShadow: '0px 20px 20px 0px rgba(0,0,0,0.25)'}}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                            <CardMedia
                                sx={{ width: 250, height: 250 }}
                                image={cake.picture_path}
                                title={cake.name}
                            />
                            <CardContent>
                                <Typography variant="h6" style={{ margin: '-15px' }}>
                                    {cake.name}
                                </Typography>

                            </CardContent>
                            <CardActions>
                                <Button size="small" component={Link} to={url} onClick={handleClick}>ORDER</Button>
                            </CardActions>
                        </div>
                    </Card>
                </Grid>

                    )
                })}

            </Grid>



    );
}

export default BakerCards;