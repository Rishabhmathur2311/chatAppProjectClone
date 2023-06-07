import React from "react";
import {emptyChatImage} from "../constants/data";
import {Box, Typography, styled, Divider} from "@mui/material";

const Component=styled(Box)`
background: #f8f9fa;
paading: 30px 0;
text-align: center;
height: 100%;
`

const Container=styled(Box)`
padding: 0 200px;
`

const Image=styled('img')({
    width: 400,
    marginTop: 110,
})

const Title=styled(Typography)`
font-size: 32px;
margin: 25px 0 10px 0;
font-weight: 300;
color: #41525d;
`

const SubTitle=styled(Typography)`
font-size: 14px;
color: #667781;
font-weight: 400;
font-family: inherit;
`

const StyleDivider=styled(Divider)`
margin: 50px 0;
opacity: 0.4;
`

const EmptyChat=()=>{
    return (
       <Component>
            <Container>
                <Image src={emptyChatImage} alt="image"></Image>
                <Title>WhatsApp Clone</Title>
                <SubTitle>This is a clone of whatsApp</SubTitle>
                <SubTitle>A project build for real time chat experience.</SubTitle>
                <StyleDivider />
            </Container>
       </Component>
    );
}

export default EmptyChat;