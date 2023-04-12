import React, { useState } from "react";
import Switch from "@mui/material/Switch";

function Switcher() {
    const [state, setState] = useState({
        checked: false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const switchContainer = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "400px",
        margin: "0 auto",
    };

    return (
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
    );
}

export default Switcher;

