import React from "react";
// import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

function App() {
  return (
    <>
      <div className="App">
        <header>
          <nav class="navbar navbar-custom navbar-expand-lg sticky-top">
            <div class="container-fluid justify-content-between">
              <div
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <a class="navbar-brand" href="index.html">
                  <img
                    src="/gyk_logo.png"
                    alt=""
                    width="13%"
                    class="d-inline-block align-text-center"
                  />
                  GetYourCake.
                </a>
              </div>
              <div navButtons>
                <Button sx={{ marginLeft: 1 }}>LOG IN</Button>
                <Button sx={{ marginLeft: 1, height: "42px" }}>
                  <ShoppingCartRoundedIcon />{" "}
                </Button>
              </div>
            </div>
          </nav>
        </header>
        <div className="content">
          <div className="content section">
            <img src="/gyk_logo.png" className="App-logo" alt="logo" />
            <p>Ordering a cake is a piece of cake</p>
          </div>
          {/* Put your page content here */}
        </div>
        <footer>
          <div class="container-fluid text-light">
            <div class="row">
              <div class="footer-content col-md-6 text-start">
                <p>
                  <strong>GetYourCake</strong> - Ordering a cake is a piece of
                  cake
                </p>
              </div>
              <div class="footer-content col-md-6 text-end">
                <p>Contact us at info@getyourcake.com</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
