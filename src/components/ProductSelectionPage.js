import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import ComboBoxAnna from "./ComboBoxAnna";

function ProductSelectionPage() {
  return (
    <div>
      <div className="content">
        <div className="content section">
          {/* <img src="/gyk_logo.png" className="App-logo" alt="logo" /> */}
          <p>Select your cake specifications here</p>

            <ComboBoxAnna />
        </div>
        {/* Put your page content here */}
      </div>

    </div>
  );
}

export default ProductSelectionPage;
