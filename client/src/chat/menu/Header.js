import { Box, styled } from "@mui/material";
import React, { useContext, useState } from "react";
import { AccountContext } from "../../context/AccountProvider";
import MessageIcon from '@mui/icons-material/Message';
import MoreVertIcon from '@mui/icons-material/MoreVert';
//components
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../../drawer/InfoDrawer";

const Component=styled(Box)`
height: 44px;
background: #f0f2f5;
padding: 8px 16px;
display: flex;
align-items: center;
`

const Image=styled('img')({
height: 40,
width: 40,
borderRadius: "50%",
})

const Wrapper=styled(Box)`
margin-left: auto;
& > *{
    margin-left: 2px;
    padding: 8px;
}
& :first-child{
    font-size: 22px;
    margin-right: 8px;
    margin-to: 3px;
}
`

const Header=()=>{

    const [openDrawer, setOpenDrawer]=useState(false);

    const {account}=useContext(AccountContext);

    const toggleDrawer=()=>{
        setOpenDrawer(true);
    }

    return (
        <>
        <Component>
            <Image src={account.picture} alt="dp" onClick={()=>toggleDrawer()}></Image>
            <Wrapper>
            <MessageIcon />
            <HeaderMenu setOpenDrawer={setOpenDrawer} />
            </Wrapper>
        </Component>
        <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
        </>
    );
}

export default Header;