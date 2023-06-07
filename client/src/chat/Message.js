import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { FormatDate } from "../utils/common-utils";
import { AccountContext } from "../context/AccountProvider";
import {iconPDF} from "../constants/data";

const Own=styled(Box)`
margin: 4px;
background: #dcf8c6;
max-width: 60%;
display: flex;
margin-left: auto;
width: fit-content;
border-radius: 10px;
word-break: break-word;
padding: 5px;
`

const Wrapper=styled(Box)`
background: #fff;
max-width: 60%;
display: flex;
margin: 4px;
width: fit-content;
border-radius: 10px;
word-break: break-word;
padding: 5px;
`

const Text=styled(Typography)`
font-size: 14px;
padding: 0 25px 0 5px;
`

const Time=styled(Typography)`
font-size: 10px;
color: #919191;
margin-top: 4px;
word-break: keep-all;

`

const Time1=styled(Typography)`
font-size: 10px;
color: #919191;
margin-top: 4px;
word-break: keep-all;
margin-left: 90%;
`

const Time2=styled(Typography)`
font-size: 10px;
color: #919191;
margin-top: 4px;
word-break: keep-all;
margin-left: 70%;
`

const Message=({message})=>{

    const {account}=useContext(AccountContext);

    return (
        <>
        {
            account.sub===message.senderId?
        <Own>
            {
                message.type==='file' ? <ImageMessage message={message}/> : <TextMessage message={message}/>
            }
        </Own>
        :
        <Wrapper>
           {
                message.type==='file' ? <ImageMessage message={message}/> : <TextMessage message={message}/>
            }
        </Wrapper>
        }
        </>
    );
}

const ImageMessage=({message})=>{
    return (
       <Box>
        {
        message?.text?.includes('.pdf')?
        <Box>            
            <a href={message.text}>
            <img src={iconPDF} alt="pdf" style={{width: 80}}></img>
            </a>
            <Time2>{FormatDate(message.createdAt)} </Time2>
        </Box>
        :
        <Box>
            <a href={message.text}>
        <img style={{width: 300, height: "100%", objectFit: "cover"}} src={message.text} alt={message.text}></img>
        </a>
        <Time1>{FormatDate(message.createdAt)} </Time1>
        </Box>
        }
        
       </Box> 
    );
}

const TextMessage=({message})=>{
    return (
        <>
        <Text>{message.text}</Text> 
           <Time>{FormatDate(message.createdAt)} </Time>
        </>
    );
}

export default Message;