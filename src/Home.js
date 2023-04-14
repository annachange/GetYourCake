import React, {useState, useEffect} from "react";
import FiltersBar from './components/FiltersBar';
// import MainViewCardsTest from './MainViewCardsTest';
//import UserLogin from './UserLogin';


import './App.css';
import Box from "@mui/material/Box";


function Home() {



    return (
        // <div className="content section">
        <Box sx={{pl:2, pr:2}}>
            <FiltersBar/>
            {/*<MainViewCards />*/}


            {/*<UserLogin/>*/}

        </Box>
    );

}

export default Home;
