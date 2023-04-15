

//code for Header including navigation and buttons

import React from "react";
import Button from "@mui/material/Button";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link , useNavigate} from "react-router-dom";
import {signOut} from "firebase/auth";
import {auth} from "../firebase";

import {useAuthValue} from '../AuthContext'

function Navigation(props) {

  const {currentUser} = useAuthValue()
  const navigate = useNavigate()

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
          {currentUser === null &&
            <Button sx={{ height: "42px", margin: '2px' }} onClick={() => navigate("login")}>  <LoginOutlinedIcon />{" "}</Button>
          }
          {currentUser !== null &&
            <Button sx={{ height: "42px", margin: '2px' }} onClick={() => signOut(auth)}><LogoutOutlinedIcon />{" "}</Button>
          }

          {currentUser !== null &&
              <Button sx={{ height: "42px", margin: '2px' }} onClick={() => navigate("profile")}><AccountCircleOutlinedIcon />{" "}</Button>
          }
          <Button sx={{ height: "42px", margin: '2px'}}>
            <ShoppingCartRoundedIcon />{" "}
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
