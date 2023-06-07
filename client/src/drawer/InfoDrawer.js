import React, { useContext } from "react";
import {Box, Typography} from "@mui/material";
import { Drawer } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styled from "@emotion/styled";
import { AccountContext } from "../context/AccountProvider";
import Profile from "./Profile";

const drawerStyle = {
    left: 20,
    height: "98%",
    width: "30%",
}

const Header = styled(Box)`
height: 107px;
background-color: #008069; 
color: #fff;
display: flex;
& > svg, & > p{
    margin-top: auto;
    padding: 15px;
    font-weight: 600;
}
`

const Component=styled(Box)`
background-color: #f0f2f5;
height: 85%;
`

const InfoDrawer=({open, setOpen})=>{

    const {account}=useContext(AccountContext);

    const toggleDrawer=()=>{
        setOpen(false);
    }

    return (
        <Box>
            <Drawer
      open={open}
      onClose={toggleDrawer}
      PaperProps={{sx: drawerStyle}}
      style={{zIndex: 1500}}
    >
        <Header>
        <ArrowBackIcon onClick={toggleDrawer} />
        <Typography>Profile</Typography>
        </Header>
        <Component>
          <Profile />
        </Component>
    </Drawer>
        </Box>
    );
}

export default InfoDrawer;