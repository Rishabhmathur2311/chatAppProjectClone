import React, { useContext } from "react";
import {Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import {GoogleLogin} from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { AccountContext } from "../context/AccountProvider";
import { addUser } from "../service/api";

const dialogStyle={
    height: "90%",
    marginTop: "12%",
    width: "60%",
    maxWidth: "100%",
    maxHeight: "100%",
    boxShadow: "none",
}

const Component=styled(Box)`
display: flex;
`

const Container=styled(Box)`
padding: 50px 0 56px 56px;
`

const Title=styled(Typography)`
font-size: 26px;
color: #525252;
font-size: 25px;
line-height: 35px;
color: #4a4a4a;
`

const StyledList= styled(List)`
& > li {
    padding: 0;
    margin-top: 15px;
}
`

const QRCode=styled('img')({
    height: 264,
    width: 264,
    margin: "50px",
})

const LoginDialog = () => {

    const {setAccount}= useContext(AccountContext);

    const onLoginSuccess=async(res)=>{
        const decoded= jwt_decode(res.credential);
        setAccount(decoded);
        await addUser(decoded);
     }
     
     const onLoginError=(err)=>{
         console.log(err);
     }   

  return (
   <div>
    <Dialog open={true} PaperProps={{sx: dialogStyle}} hideBackdrop>
            <Component>
                <Container>
                    <Title>Use WhatsApp on your computer</Title>
                    <StyledList>
                    <ListItem>1. Open WhatsApp on your phone</ListItem>
                    <ListItem>2. Tap on to a Link</ListItem>
                    <ListItem>3. Point your phone to this screen to capture the QR code</ListItem>
                    </StyledList>
                </Container>
                <Box>
                    <QRCode  src="https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg" alt="qr code"></QRCode>
                    <Box>
                        <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
                    </Box>
                </Box>
            </Component>
    </Dialog>
   </div>
  );
};

export default LoginDialog;
