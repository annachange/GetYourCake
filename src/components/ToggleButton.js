import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import styled from 'styled-components';





const StyledToggleButtonGroup = styled(ToggleButtonGroup)`
  .MuiToggleButton-root {
    text-transform: none;
    border: 1px solid #ffffff;
    font-size: 1rem;
    transition: font-size 0.2s ease-in-out;
    background-color: #e0d7d8;
    color: #C27F85;
    
    &:hover {
      font-size: 1rem;
      background-color: #C27F85;
      color: #EDD9DB;
      box-shadow: 0px 1px 8px #FDE2E2;
    }

    &.Mui-selected {
      background-color: #C27F85;
      color: #EDD9DB;
    }
  }
`;
function ColorToggleButton() {
    const [alignment, setAlignment] = React.useState('ALL CAKES');

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };


    return (
        <StyledToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="Platform"
            sx={{  marginTop: '20px',  border: '2px solid #C27F85', boxShadow: '0px 20px 20px 0px rgba(0,0,0,0,15)'}}
        >
            <ToggleButton value="ALL CAKES">ALL CAKES</ToggleButton>
            <ToggleButton value="CHILDREN">CHILDREN</ToggleButton>
            <ToggleButton value="CELEBRATION">CELEBRATION</ToggleButton>
            <ToggleButton value="WEDDING">WEDDING</ToggleButton>
        </StyledToggleButtonGroup>
    );
}

export default ColorToggleButton;