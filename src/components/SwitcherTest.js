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
        width: "200px",
        margin: "0 auto",
    };

    return (
        <div style={switchContainer}>
            <span>{state.checked ? "Off" : "Off"}</span>
            <Switch
                checked={state.checked}
                onChange={handleChange}
                name="checked"
                color="primary"
            />
            <span>{state.checked ? "On" : "On"}</span>
        </div>
    );
}

export default Switcher;

