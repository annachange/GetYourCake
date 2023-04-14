import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";

function Switcher() {
    const [state, setState] = useState({
        checked: false,
        address: "",
    });

    const handleChange = (event) => {
        setState({
            ...state,
            checked: event.target.checked,
            address: event.target.checked ? "" : state.address,
        });
    };


    const switchContainer = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "400px",
        margin: "0 auto",
    };

    return (
       <div>


           <div style={switchContainer}>
            <span>{state.checked ? "I'll pick up myself" : "I'll pick up myself"}</span>
            <Switch
                checked={state.checked}
                onChange={handleChange}
                name="checked"
                color="primary"
            />
            <span>{state.checked ? "Deliver to my address" : "Deliver to my address"}</span>
        </div>


            {state.checked && (
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '14px' }}>

                <TextField
                        label="Please specify address"
                        variant="outlined"
                        size="small"
                        value={state.address}
                        onChange={(event) =>
                            setState({ ...state, address: event.target.value })
                        }
                    />
                </div>
            )}
</div>
);
}

export default Switcher;

