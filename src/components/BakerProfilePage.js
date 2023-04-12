import React from "react";
import BakerViewCards from "./BakerViewCards";
import BakerProfileSection from "./BakerProfileSection";
import ToggleButton from "./ToggleButton";

import { Stack, Chip } from '@mui/material';
import VerticalTabs from "./VerticalTabs";

function BakerProfilePage() {
  return (
    <>
        <BakerProfileSection />

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <ToggleButton />
      <div className="BakerProfilePage">

        <div className="content">
          <div className="content section">
            {/* <img src="/gyk_logo.png" className="App-logo" alt="logo" /> */}
            <BakerViewCards />
          </div>
          {/* Put your page content here */}
        </div>

      </div>
</div>
    </>
  );
}

export default BakerProfilePage;
