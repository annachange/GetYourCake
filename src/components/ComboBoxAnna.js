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



import img1 from '../images/image1.jpg';
import img2 from '../images/image2.jpg';
import img3 from '../images/image3.jpg';
import img4 from '../images/image4.jpg';
import img5 from '../images/image5.jpg';
import img6 from '../images/image6.jpg';




const cards = [
    { id: 1, src: img1, title: 'Image 1', description: 'This is pistachio' },
    { id: 2, src: img2, title: 'Image 2', description: 'This is rafaello' },
    { id: 3, src: img3, title: 'Image 3', description: 'This is red velvet' },
    { id: 4, src: img4, title: 'Image 4', description: 'This is snickers' },
    { id: 5, src: img5, title: 'Image 5', description: 'This is chocolate' },
    { id: 6, src: img6, title: 'Image 6', description: 'This is rasberry' },
];


const label = { inputProps: { 'aria-label': 'Switch demo' } };


function ComboBoxAnna() {
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const [address, setAddress] = useState('');

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




    return (
        <div className="container">
            <Grid container spacing={2}>
                <Grid item xs={6}>




                </Grid>
                <Grid item xs={6}>

                    <div className="form-section">
                        <Typography variant="h6">Cake size</Typography>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={weightofCake}
                            sx={{width: 300}}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </div>


                    <div className="form-section">
                        <Typography variant="h6">Cake flavours</Typography>
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label"></FormLabel>

                            <RadioGroup row aria-label="gender" name="gender1" value={selectedValue} onChange={handleChange}>
                                <FormControlLabel  labelPlacement="top" value="male" control={<Radio />} label={
                                    <>
                                        Pistachio
                                        <img src={img1} alt="cat" style={{ width: '50px', height: '50px' }} />
                                    </>
                                } />
                                <FormControlLabel
                                    labelPlacement="top"
                                    value="female"
                                    control={<Radio />}
                                    label={
                                        <>
                                            Rafaello
                                            <img src={img2} alt="cat" style={{ width: '50px', height: '50px' }} />
                                        </>
                                    }
                                />
                                <FormControlLabel  labelPlacement="top" value="other" control={<Radio />} label={
                                    <>
                                        Red velvet
                                        <img src={img3} alt="cat" style={{ width: '50px', height: '50px' }} />
                                    </>
                                } />
                            </RadioGroup>


                            {/*<RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Chocolate" />
                        <FormControlLabel value="male" control={<Radio />} label="Nutella" />
                        <FormControlLabel value="other" control={<Radio />} label="Red velvet" />
                    </RadioGroup>*/}
                        </FormControl>
                    </div>


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
                            label="Yes"
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

                    <div className="form-section">
                        <Typography variant="h6">Additional Order Information</Typography>
                        <TextField
                            id="standard-multiline-static"
                            label="Additional Order Information"
                            multiline
                            rows={4}
                            variant="standard"
                        />
                    </div>

                </Grid>
            </Grid>

        </div>



    );
}

export default ComboBoxAnna