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
import Button from '@mui/material/Button';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import SearchIcon from '@mui/icons-material/Search';
import {useContext} from "react";

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
            <Grid container spacing={2} sx={{mt:2, mb:3}} alignItems="center">
                <Grid item xs={12} md={3}>
                    {/*<MultipleSelectChip/>*/}
                    <div>
                        <FormControl sx={{ m: 1, width: 300 }}>
                            <InputLabel>Choose location</InputLabel>
                            <Select
                                multiple
                                value={userLocation}
                                // onChange={handleLocationChange}
                                onChange={(event) => setUserLocation(event.target.value)}
                                input={<OutlinedInput id="select-multiple-chip" label="Choose Location" />}
                                renderValue={(selected) => (
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                        {selected.map((value) => (
                                            <Chip key={value} label={value} />
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
                <Grid item xs={12} md={3}>
                    {/*<MultipleSelectCheckmarks/>*/}
                    <div>
                        <FormControl sx={{ m: 1, width: 300 }}>
                            <InputLabel >Choose limitations</InputLabel>
                            <Select
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
                <Grid item xs={12} md={3}>
                    <TextField id="outlined-basic" type="datetime-local" variant="outlined" onChange={(event) => setUserDate(event.target.value)} />
                </Grid>
                <Grid item xs={12} md={3}>
                    <Button sx={{ height: "42px" }} >
                        <SearchIcon />{" "}
                    </Button>
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