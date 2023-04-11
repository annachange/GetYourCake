import React from "react";
import NavbarFirstPage from './components/NavbarFirstPage';
import MainViewCards from "./components/MainViewCards";
//import UserLogin from './UserLogin';



import './App.css';
import Grid from "@mui/material/Grid";
import MultipleSelectChip from "./components/MultipleSelectChip";
import MultipleSelectCheckmarks from "./components/MultipleSelectCheckmarks";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";


function Home() {
    return (
        // <div className="content section">
        <Box sx={{pl:2, pr:2}}>
            <NavbarFirstPage/>
            <MainViewCards />


            {/*<UserLogin/>*/}
            <img src="/gyk_logo.png" className="App-logo" alt="logo"/>
            <p>Ordering a cake is a piece of cake</p>
        </Box>
    );

}

export default Home;
