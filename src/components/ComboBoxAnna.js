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
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Slider from '@mui/material/Slider';

import CakeFlavoursSelection from "./CakeFlavoursSelection";



import img1 from '../images/image1.jpg';
import img2 from '../images/image2.jpg';
import img3 from '../images/image3.jpg';
import img4 from '../images/image4.jpg';
import img5 from '../images/image5.jpg';
import img6 from '../images/image6.jpg';

import cakeimg2 from '../images/cake2.jpg';
import cakeimg1 from "../images/cake1.jpg";
import cakeimg3 from "../images/cake3.jpg";
import cakeimg4 from "../images/cake4.jpg";


const cards = [
    { id: 1, src: img1, title: 'Image 1', description: 'This is pistachio' },
    { id: 2, src: img2, title: 'Image 2', description: 'This is rafaello' },
    { id: 3, src: img3, title: 'Image 3', description: 'This is red velvet' },
    { id: 4, src: img4, title: 'Image 4', description: 'This is snickers' },
    { id: 5, src: img5, title: 'Image 5', description: 'This is chocolate' },
    { id: 6, src: img6, title: 'Image 6', description: 'This is raspberry' },
];


const label = { inputProps: { 'aria-label': 'Switch demo' } };
function valuetext(value) {
    return `${value}°C`;
}

function ComboBoxAnna() {
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const [address, setAddress] = useState('');


    const marks = [

        {
            value: 1,
            label: '1',
        },
        {
            value: 2,
            label: '2',
        },
        {
            value: 3,
            label: '3',
        },
        {
            value: 4,
            label: '4',
        },
        {
            value: 5,
            label: '5',

},



    ];


    const weightofCake = [
        {label: '0,5 kg', year: 1994},
        {label: '0,8 kg', year: 1972},
        {label: '1 kg', year: 1974},
        {label: '1,2 kg', year: 2008},
        {label: '1,5 kg', year: 1957},
        {label: '1,8 kg', year: 1993},
        {label: '2 kg', year: 1994},
        {label: '2,3 kg', year: 2003,},
        {label: '2,7 kg', year: 1966},
        {label: '3 kg', year: 1999},
    ];


    const handleSwitchChange = () => {
        setIsSwitchOn(!isSwitchOn);
    };

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };






    const [selectedValue, setSelectedValue] = useState('female');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    }


    const [selectedCakeSize, setSelectedCakeSize] = useState(2);
    const calculatePrice = () => {
        return selectedCakeSize * 20;
    };


    return (
        <Grid container rowSpacing={2}>
            <Grid item xs={6} justify="center">
                <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            image={cakeimg2}
                            alt="My Image"

                        />
                    </Card>



                </Grid>
                <Grid item xs={6} >
                    <Box  borderRadius={5} border={2} borderColor="#C27F85" p={2} sx={{ width: '100%', maxWidth: 600 }}>



                    <div>
                        <Typography variant="h4">Cake "Fruit Selection"</Typography>
                        <Chip label={`TOTAL PRICE IS ${calculatePrice()} EUR`} variant="outlined" />
                    </div>
                    <div className="form-section" sx={{ width: 300 }}>
                        <Typography variant="h6">Cake size (kg)</Typography>
                        <Slider
                            aria-label="Cake sixe"
                            defaultValue={2}
                            getAriaValueText={valuetext}
                            valueLabelDisplay="auto"
                            step={0.2}
                            marks
                            min={0.6}
                            max={5.4}
                            color="secondary"
                            sx={{width: 400}}
                            marks={marks}
                            valueLabelDisplay="on"
                            onChange={(event, value) => setSelectedCakeSize(value)}
                        />
                    </div>

                        <Divider />
                    <div className="form-section">
                        <Typography variant="h6">Cake flavours</Typography>
<CakeFlavoursSelection />








                    </div>
                        <Divider />

                    <div className="form-section">
                        <Typography variant="h6">Delivery to your address</Typography>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={isSwitchOn}
                                    onChange={handleSwitchChange}
                                    name="hasAddress"
                                    color="primary"
                                />
                            }
                            label='Yes'
                        />
                        {isSwitchOn && (
                            <TextField
                                label="Please specify address"
                                variant="outlined"
                                value={address}
                                onChange={handleAddressChange}
                            />
                        )}


                    </div>
                        <Divider />
                        <div className="form-section">
                            <Typography variant="h6">Limitations</Typography>

                        </div>
                        <Divider />

                    <div className="form-section">
                        <Typography variant="h6">Additional Order Information</Typography>
                        <TextField
                            sx={{width: 400}}
                            id="standard-multiline-static"
                            label="Additional Order Information"
                            multiline
                            rows={4}
                            variant="standard"
                        />
                    </div>



                    <div> <Button>Add to cart</Button></div>

                    </Box>
                </Grid>
            </Grid>





    );
}

export default ComboBoxAnna