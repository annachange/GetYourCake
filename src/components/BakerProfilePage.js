
//page about baker including card with main baker details and slider with cakes

import React, {useContext} from "react";
import BakerViewCards from "./BakerViewCards";
import Box from '@mui/material/Box';
import BakerProfileSection from "./BakerProfileSection";
import { useParams } from "react-router-dom";
import {GetYourCakeContext} from "../utils/GetYourCakeContext";



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
