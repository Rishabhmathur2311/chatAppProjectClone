import { Box, InputBase, styled } from "@mui/material";
import React, { useState } from "react";
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';
import { useEffect } from "react";
import { uploadFile } from "../service/api";

const Container=styled(Box)`
height: 55px;
background: #f0f2f5;
display: flex;
align-items: center;
width: 100%;
& > *{
    margin: 5px;
    color: #919191;
}
`

const Search=styled(Box)`
background-color: #fff;
border-radius: 15px;
height: 38px;
width: calc(94% - 100px);
`

const ClipIcon=styled(AttachFileOutlinedIcon)`
transform: rotate(40deg);
`

const InputField=styled(InputBase)`
width: 100%;
paading: 20px;
height: 30px;
padding-left: 25px;
font-size: 16px;
padding-top: 7px;
`

const Clip=styled(ClipIcon)`
cursor: pointer;
`

const Footer=({sendText, setValue,  value, file, setFile, setImage})=>{

    useEffect(()=>{
        const getImage=async ()=>{
            if(file){
                const data=new FormData();
                data.append("name", file.name);
                data.append("file", file);

                let response=await uploadFile(data);
                setImage(response.data);
            }
        }
        getImage();
    }, [file])

    const onFileChange=(e)=>{
        setFile(e.target.files[0]);
        setValue(e.target.files[0].name);
    }

    return (
        <Container>
            <EmojiEmotionsOutlinedIcon />
            <label htmlFor="fileInput">
            <Clip  />
            </label>
            <input
            type="file"
            id="fileInput"
            style={{display: "none"}}
            onChange={(e)=>onFileChange(e)}
            ></input>
            <Search>
                <InputField placeholder="Type a message"
                onChange={(e)=>setValue(e.target.value)}
                onKeyPress={(e)=>sendText(e)}
                value={value}
                />
            </Search>
            <KeyboardVoiceOutlinedIcon />
        </Container>
    );
}

export default Footer;