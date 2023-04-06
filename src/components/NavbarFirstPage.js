import React from 'react';
import MultipleSelectChip from './MultipleSelectChip';
import MultipleSelectCheckmarks from './MultipleSelectCheckmarks';
import TextField from '@mui/material/TextField';
function NavbarFirstPage() {


return (
<div class="container">
  <div class="row">
    <div class="col-sm">
      <MultipleSelectChip/>
    </div>
    <div class="col-sm">
     <MultipleSelectCheckmarks/>
    </div>
    <div class="col-sm">
      <TextField id="outlined-basic" type="datetime-local" variant="outlined" />
    </div>
  </div>
</div>
)
}
export default NavbarFirstPage;