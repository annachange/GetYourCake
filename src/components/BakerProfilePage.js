import React from "react";
import BakerViewCards from "./BakerViewCards";

function BakerProfilePage() {
  return (
    <>
      <div className="BakerProfilePage">
        <div className="content">
          <div className="content section">
            {/* <img src="/gyk_logo.png" className="App-logo" alt="logo" /> */}
            <BakerViewCards />
          </div>
          {/* Put your page content here */}
        </div>

      </div>
    </>
  );
}

export default BakerProfilePage;
