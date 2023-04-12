import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function ColorToggleButton() {
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
        >
            <ToggleButton value="ALL CAKES">ALL CAKES</ToggleButton>
            <ToggleButton value="CHILDREN">CHILDREN</ToggleButton>
            <ToggleButton value="CELEBRATION">CELEBRATION</ToggleButton>
            <ToggleButton value="WEDDING">WEDDING</ToggleButton>
        </ToggleButtonGroup>
    );
}

export default ColorToggleButton;