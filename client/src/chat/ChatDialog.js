import { Dialog } from "@mui/material";
import React, { useContext, useEffect } from "react";
import Menu from "../chat/menu/Menu";
import { Box } from "@mui/material";
import EmptyChat from "./EmptyChat";
import styled from "@emotion/styled";
import ChatBox from "./ChatBox";
import { AccountContext } from "../context/AccountProvider";
import {
    Alert,
    AlertIcon,
    Stack,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'

const Component=styled(Box)`
display: flex;
`

const RightComponent=styled(Box)`
width: 73%;
min-width: 300px;
height: 102%;
border-left: 1px solid rgba(0, 0, 0.14);
`

const LeftComponent=styled(Box)`
min-width: 350px;
`

const dialogStyle={
    height: "100%",
    width: "100%",
    margin: "20px",
    marginBottom: "0px",
    borderRadius: "none",
    maxWidth: "100%",
    maxHeight: "100%",
    boxShadow: "none",
}

const Wrapper=styled(Box)`
z-index: 10000000;
`

const ChatDialog=()=>{

    const {person}=useContext(AccountContext);

    useEffect(()=>{
        {alert("Loading of database might take 3-4 minutes")}
    }, []);

    return (
        <Box>
        <Dialog open={true}
        PaperProps={{sx: dialogStyle}}
        hideBackdrop
        max-width={"xl"}
        >
             
           <Component>
            <LeftComponent>
                <Menu />
            </LeftComponent>
            <RightComponent>
               {Object.keys(person).length ? <ChatBox /> : <EmptyChat />}
            </RightComponent>
           </Component>
        </Dialog>
        </Box>
    );
}

export default ChatDialog;