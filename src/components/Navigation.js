import React from "react";
import Button from "@mui/material/Button";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Link , useNavigate} from "react-router-dom";
import {signOut} from "firebase/auth";
import {auth} from "../firebase";

import {useAuthValue} from '../AuthContext'

function Navigation(props) {

  const {currentUser} = useAuthValue()
  const navigate = useNavigate()

  console.log(currentUser)

  return (
    <nav class="navbar navbar-custom navbar-expand-lg sticky-top">
      <div class="container-fluid justify-content-between">
        <div
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link class="navbar-brand" to="/">
            <img
              src="/gyk_logo.png"
              alt=""
              width="13%"
              class="d-inline-block align-text-center"
            />
            GetYourCake
          </Link>
        </div>
        <div className="navbar-buttons">
          <Button component={Link} to="/">MAIN PAGE</Button>
          {currentUser === null &&
            <Button onClick={() => navigate("login")}>BAKER LOG IN</Button>
          }
          {currentUser !== null &&
            <Button onClick={() => signOut(auth)}>SIGN OUT</Button>
          }

          {currentUser !== null &&
              <Button onClick={() => navigate("profile")}>PROFILE</Button>
          }
          <Button sx={{ height: "42px" }}>
            <ShoppingCartRoundedIcon />{" "}
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
