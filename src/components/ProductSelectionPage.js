import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import ComboBoxAnna from "./ComboBoxAnna";

function ProductSelectionPage() {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <div className="content">
        <div className="content section">
          {/* <img src="/gyk_logo.png" className="App-logo" alt="logo" /> */}
          <p>Select your cake specifications here</p>

            <ComboBoxAnna />
        </div>
        {/* Put your page content here */}
      </div>
      <Footer />
    </div>
  );
}

export default ProductSelectionPage;
