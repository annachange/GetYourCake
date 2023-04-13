import React, {useContext} from "react";
import BakerViewCards from "./BakerViewCards";
import BakerProfileSection from "./BakerProfileSection";
import ToggleButton from "./ToggleButton";
import { useParams } from "react-router-dom";
import {GetYourCakeContext} from "../utils/GetYourCakeContext";


import { Stack, Chip } from '@mui/material';
import VerticalTabs from "./VerticalTabs";

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

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <ToggleButton />
      <div className="BakerProfilePage">

        <div className="content">
          <div className="content section">
            {/* <img src="/gyk_logo.png" className="App-logo" alt="logo" /> */}
            <BakerViewCards cakes={bakerscakes} />
          </div>
          {/* Put your page content here */}
        </div>

      </div>
</div>
    </>
  );
}

export default BakerProfilePage;
