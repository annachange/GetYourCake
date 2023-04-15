//components which allows to filter the bakers based on specific criteria

//included into



import React from 'react';
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Grid";
import {useState}  from "react";
import { useTheme } from '@mui/material/styles';
import MainViewCards from "./MainViewCards";
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';


// See osa muudab pärast klikkimist avaneva dropdowni kujundust.
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const locations = [
    'Tallinn',
    'Tartu',
    'Pärnu',
    'Viljandi',
    'Narva',
];

const limitations = [
    'gluten free',
    'lactose free',
    'vegan',
    'free-range eggs only',
    'no artificial colorings',
];

function FiltersBar() {


    const theme = useTheme();
    const [userLocation, setUserLocation] = useState([]);
    const [userLimitation, setUserLimitation] = React.useState([]);
    const [userDate, setUserDate] = useState("");

    const handleLocationChange = (event) => {

        let locArray = []
        locArray.push(event.target.value)

        setUserLocation(
            locArray
            // // On autofill we get a stringified value.
            // typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleLimitationChange = (event) => {
        const {
            target: { value },
        } = event;
        setUserLimitation(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    // const handleDateChange = (event) => {
    //     const {
    //         target: { value },
    //     } = event;
    //     setUserLimitation(
    //         // On autofill we get a stringified value.
    //         typeof value === 'string' ? value.split(',') : value,
    //     );
    // };
    // This function has to search the selected values from the database and present them in front-end:

    /*    const handleSearchClick =*/

    return (
        <>


            <Typography variant="h4" component="h4" sx={{
                marginTop: '30px',
                marginBottom: '30px',
                fontWeight: 'bold',
                color: '#d76999',
                textShadow: '0px 0px 70px rgba(0, 0, 0, 0.5)',
                boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.25)',
                padding: '15px',
                borderRadius: '10px',
                display: 'inline-block',
            }}>
                Ordering a cake is a piece of cake
            </Typography>

            <Grid container spacing={2} sx={{mt:2, mb:3}} alignItems="center" sx={{  marginBottom: '30px' }}>
                <Grid item xs={4}>
                    <Typography>Where are you located?</Typography>
                    {/*<MultipleSelectChip/>*/}
                    <div>
                        <FormControl sx={{ m: 1, width: 300, backgroundColor: '#ffd5d6' }}>
                            <InputLabel>Select city</InputLabel>
                            <Select
                                label="Select location"
                                multiple
                                value={userLocation}
                                // onChange={handleLocationChange}
                                onChange={(event) => setUserLocation(event.target.value)}
                                input={<OutlinedInput id="select-multiple-chip" label="Choose Location" />}
                                renderValue={(selected) => (
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                        {selected.map((value) => (
                                            <Chip key={value} label={value}  />
                                        ))}
                                    </Box>
                                )}
                                MenuProps={MenuProps}

                            >
                                {locations.map((location) => (
                                    <MenuItem key={location} value={location}>
                                        {location}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                </Grid>

                <Grid item xs={4}>
                    <Typography>When do you need a cake?</Typography>
                    <TextField   label="Order date"

                                 InputLabelProps={{
                                     shrink: true,
                                 }}
                                 sx={{ m: 1, width: 300, backgroundColor: '#ffd5d6' }} id="outlined-basic" type="datetime-local" variant="outlined" onChange={(event) => setUserDate(event.target.value)} />
                </Grid>

                <Grid item xs={4}>
                    <Typography>Do you have any limitations?</Typography>
                    {/*<MultipleSelectCheckmarks/>*/}
                    <div>
                        <FormControl sx={{ m: 1, width: 300, backgroundColor: '#ffd5d6' }}>
                            <InputLabel>Select limitations</InputLabel>
                            <Select
                                label="Select limitations"
                                multiple
                                value={userLimitation}
                                onChange={handleLimitationChange}
                                input={<OutlinedInput label="Tag" />}
                                renderValue={(selected) => selected.join(', ')}
                                MenuProps={MenuProps}
                            >
                                {limitations.map((limitation) => (
                                    <MenuItem key={limitation} value={limitation}>
                                        <Checkbox checked={userLimitation.indexOf(limitation) > -1} />
                                        <ListItemText primary={limitation} />
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                </Grid>


            </Grid>

            <Grid container spacing={0} sx={{mt:2, mb:3}} alignItems="center">
                <MainViewCards selectedLocations={userLocation} selectedLimitations={userLimitation} selectedDate={userDate}/>
            </Grid>
        </>
    )
}
export default FiltersBar;

// onSearchClick={handleSearchClick}