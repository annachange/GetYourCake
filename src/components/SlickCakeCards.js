import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Card, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";

function MySlider() {
    const settings = {
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            <div>
                <Card style={{ border: '1px solid #d76999' }} sx={{ height: 350, width: 350, borderRadius: 10,  boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.25)'}}>
                    <div>

                        <CardContent>
                            <Typography variant="h6" >
                               Privet
                            </Typography>

                        </CardContent>

                    </div>
                </Card>
            </div>
            <div>
                <h3>Slide 2</h3>
            </div>
            <div>
                <h3>Slide 3</h3>
            </div>
            <div>
                <h3>Slide 4</h3>
            </div>
            <div>
                <h3>Slide 5</h3>
            </div>
        </Slider>
    );
}

export default MySlider;
