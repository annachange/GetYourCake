import React, {useContext} from "react";
import BakerViewCards from "./BakerViewCards";
import Box from '@mui/material/Box';
import BakerProfileSection from "./BakerProfileSection";
import ToggleButton from "./ToggleButton";
import { useParams } from "react-router-dom";
import {GetYourCakeContext} from "../utils/GetYourCakeContext";


import { Stack, Chip } from '@mui/material';
import VerticalTabs from "./VerticalTabs";
import SlickCakeCards from "./SlickCakeCards";

function BakerProfilePage() {

    let { id } = useParams();
    console.log(id)
    const gyc = useContext(GetYourCakeContext);

    const baker = gyc.bakers.find(bk => bk.id === id);
    console.log(baker)

    const bakerscakes = gyc.cakes.filter(cake => cake.baker_id === id);


  return (
    <>
        <BakerProfileSection baker={baker} />


           <Box sx={{ marginLeft: "100px", marginRight: "100px", marginTop: "50px", marginBottom: "50px" }}> <BakerViewCards cakes={bakerscakes} /> </Box>


    </>
  );
}

export default BakerProfilePage;
