import React from 'react';
import MultipleSelectChip from './MultipleSelectChip';
import MultipleSelectCheckmarks from './MultipleSelectCheckmarks';
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Grid";
function FiltersBar() {


    return (

        <Grid container spacing={2} sx={{mt:2, mb:3}} alignItems="center">
            <Grid item xs={12} md={3}>
                <MultipleSelectChip/>
            </Grid>
            <Grid item xs={12} md={3}>
                <MultipleSelectCheckmarks/>
            </Grid>
            <Grid item xs={12} md={3}>
                <TextField id="outlined-basic" type="datetime-local" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={3}>

            </Grid>
        </Grid>



    )
}
export default FiltersBar;