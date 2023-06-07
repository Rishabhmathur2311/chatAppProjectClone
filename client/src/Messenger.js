import React, { useContext } from "react";
import LoginDialog from "./account/LoginDialog";
import {AppBar, Toolbar, styled, Box } from "@mui/material";
import ChatDialog from "./chat/ChatDialog";
import { AccountContext } from "./context/AccountProvider";

const LoginHeader= styled(AppBar)`
height: 150px;
background-color: #00bfa5;
`

const Header= styled(AppBar)`
height: 100px;
background-color: #00bfa5;
box-shadow: none;
`

const Component=styled(Box)`
height: 100vh;
background: #DCDCDC; 
`

const Messenger = () => {

    const {account} = useContext(AccountContext);

  return (
    <div>
    {
     account?
     <Header>
        <Toolbar>
    <ChatDialog />
    </Toolbar>
    </Header>
    :
    <div>
    <Component>
    <LoginHeader>
        <Toolbar>
        <LoginDialog />
        </Toolbar>
    </LoginHeader>
    </Component>
    </div>}
    </div>
  );
};

export default Messenger;