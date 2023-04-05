import React, {useState}  from "react";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

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
    'Harjumaa',
    'Hiiumaa',
    'Ida-Virumaa',
    'Jõgevamaa',
    'Järvamaa',
    'Läänemaa',
    'Lääne-Virumaa',
    'Põlvamaa',
    'Pärnumaa',
    'Raplamaa',
    'Saaremaa',
    'Tartumaa',
    'Valgamaa',
    'Viljandimaa',
    'Võrumaa'
];

function getStyles(location, userLocation, theme) {
    return {
        fontWeight:
            userLocation.indexOf(location) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

function filterBar() {
    const theme = useTheme();
    const [userLocation, setUserLocation] = useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setUserLocation(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-chip-label">Choose location</InputLabel>
                <Select
                    // labelId="demo-multiple-chip-label"
                    // id="demo-multiple-chip"
                    multiple
                    value={userLocation}
                    onChange={handleChange}
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
                        <MenuItem
                            key={location}
                            value={location}
                            style={getStyles(location, userLocation, theme)}
                        >
                            {location}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

export default filterBar;