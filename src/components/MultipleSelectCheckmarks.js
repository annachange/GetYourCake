import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

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

const limitations = [
    'gluten free',
    'lactose free',
    'vegan',
    'free-range eggs only',
    'no artificial colorings',
];

export default function MultipleSelectCheckmarks() {
    const [userLimitation, setUserLimitation] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setUserLimitation(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel >Choose limitations</InputLabel>
                <Select
                    multiple
                    value={userLimitation}
                    onChange={handleChange}
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
    );
}