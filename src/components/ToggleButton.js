import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function ColorToggleButton() {
    const [alignment, setAlignment] = React.useState('ALL CAKES');

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };


    return (
        <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleAlignment}
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