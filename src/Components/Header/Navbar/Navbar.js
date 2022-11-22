import React from "react";
import "./Navbar.scss";
import { Stack, Button } from "@mui/material";
import Logo from "../Navbar/Logo.png";
import { TbWorld } from "react-icons/tb";
import DropDown from "./DropDown";



const Navbar = () => {
  

  


  return (
    <Stack direction="row" sx={{ borderBottom: "1px solid silver", padding: { lg: "1.25rem", xs: "0.50rem" } }}>
      <img src={Logo} style={{maxHeight:"30px"}} alt="logo" />
      
      <Stack direction="row" sx={{ position: "relative", left: { lg: "75%", xs: "7%" } }}>
        
        <Button variant="text" id="btn1">
          Become a Host
        </Button>

        <Button id="btn2">
        <TbWorld />
        </Button>
    {/* <button id="dropboxButton" style={{backgroundColor:"white", border:"none" , position:"relative", right:"2%"}}> */}
      
            <DropDown/>
      
       
    {/* </button> */}

  
    
      </Stack>
    </Stack>
  );
};

export default Navbar;
