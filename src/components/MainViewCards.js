//cards of the bakers and their 2 cakes on the main page


import React, { useContext } from 'react';
import {GetYourCakeContext} from "../utils/GetYourCakeContext";
import moment from 'moment';
import { Grid, Card, CardContent, CardHeader } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import CakeLoop from "./CakeLoop";
import {Link} from "react-router-dom";
import { styled } from '@mui/material/styles';
import CakeIcon from '@mui/icons-material/Cake';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import Typography from '@mui/material/Typography';


const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#d76999',
    },
    '& .MuiRating-iconHover': {
        color: '#ff3d47',
    },
});

function MainCards(props) {

    const gyc = useContext(GetYourCakeContext);  //it contains bakers and cakes
    // console.log(gyc)
    // console.log(gyc.bakers)
    // console.log(gyc.cakes)

    let bakersArray = []

    // now comes location  loop:
    if (props.selectedLocations.length > 0) {  // shows that something is selected

        let innerArray = []
        for (const loc of props.selectedLocations) {

            const result = gyc.bakers.filter(bk => bk.location === loc)  // filter the gyc according to the choice

            for (const res of result) {
                innerArray.push(res)
            }

        }
        bakersArray = [...innerArray]

    } else {

        bakersArray = gyc.bakers
    }

    // now comes ingredients loop:

    if (props.selectedLimitations.length > 0) {  // shows that something is selected


        let innerArray1 = []


        for (const bk of bakersArray) {

            const hasAll = props.selectedLimitations.every(lmt => bk.intolerance.includes(lmt))
            if (hasAll === true) {
                innerArray1.push(bk)
            }

        }



        bakersArray = [...innerArray1]

    }

    // check for available dates
    if (props.selectedDate.length > 0) {  // shows that something is selected

        let dateToCheck = moment(props.selectedDate).format('YYYY-MM-DD')

        let innerArray2 = []


        for (const bk of bakersArray) {

            let res = moment(dateToCheck).isBetween(bk.availabilitystart, bk.availabilityend);
            if (res === true) {
                innerArray2.push(bk)
            }

        }

        bakersArray = [...innerArray2]

    }


    const headerStyle = {
        backgroundColor: "#ffd5d6",
        fontSize: "1rem",
        transition: "font-size 0.2s ease-in-out",
        textTransform: "none",
        color: "rgba(6,6,6,0.7)"
    };

    const handleClick = () => {
        window.scrollTo(0, 0);
    };



        return (

        <Grid sx={{ padding: '0 60px' }} justifyContent="center" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

            {bakersArray.map((baker, index) => {
                // {gyc.bakers.map((baker, index) => {
                let url = 'bakerProfilePage/'+ baker.id
                return (
                    <Grid item xs={4} key={index}>
                        <Card style={{ border: '1px solid #d76999' }} sx={{ borderRadius: 10,  boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.25)', margin: "12px" }} >
                            <CardHeader
                                style={headerStyle}
                                avatar={
                                    <Avatar alt={baker.name}
                                            src={baker.profilepicturepath}
                                            sx={{ width: 100, height: 100}} style={{ border: '0.5px solid #d76999'}}/>
                                }
                                title={
                                    <div>
                                        <Typography variant="h6" component="div">
                                            <strong> {baker.name} from {baker.location}</strong>
                                        </Typography>
                                    </div>
                                }
                                subheader={
                                    <StyledRating
                                        size='small'
                                        name="example-rating"
                                        value={baker.rating}
                                        precision={0.5}
                                        readOnly
                                        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                        icon={<CakeIcon fontSize="inherit" />}
                                        emptyIcon={<CakeOutlinedIcon fontSize="inherit" />}
                                    />
                                }
                            >
                            </CardHeader>
                            <CardContent >
                                <div sx={{ justify: 'center', margin: '-20px'}}><CakeLoop baker={baker.id}/></div>

                            </CardContent>
                            <CardActions sx={{ justifyContent: 'center' }}>
                                <Button component={Link} to={url} onClick={handleClick} sx={{  marginBottom: '10px', marginTop: '-20px' }}>SEE ALL CAKES</Button>

                            </CardActions>
                        </Card>
                    </Grid>
                )
            })}

            </Grid>

    );
}

export default MainCards;