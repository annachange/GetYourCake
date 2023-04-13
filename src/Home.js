import React from "react";
import FiltersBar from './components/FiltersBar';
import MainViewCards from "./components/MainViewCards";
// import MainViewCardsTest from './MainViewCardsTest';
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
            <FiltersBar/>
            <MainViewCards />



            {/*<UserLogin/>*/}

        </Box>
    );

}

export default Home;
