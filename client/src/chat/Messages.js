import { Box, styled } from "@mui/material";
import React, { useContext, useRef } from "react";
import Footer from "./Footer";
import { AccountContext } from "../context/AccountProvider";
import { useState } from "react";
import { newMessage, getMessages } from "../service/api";
import { useEffect } from "react";
import Message from "./Message";


const Wrapper = styled(Box)`
    background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    background-size: 50%;
`;
const Component=styled(Box)`
height: 78.75vh;
overflow-y: scroll;
`

const Container=styled(Box)`
padding: 1px 8px;
`

const Messages=({person, conversation})=>{

    const {messageFlag, setMessageFlag}=useContext(AccountContext);

    const [value, setValue]=useState("");

    const [messages, setMessages]=useState([]);

    const {account}=useContext(AccountContext);

    const [file, setFile]=useState();

    const [image, setImage]=useState("");

    const scrollRef=useRef();

    useEffect(()=>{
        scrollRef.current?.scrollIntoView({transition: "smooth"});
    }, [messages]);

    useEffect(()=>{
        const getMessageDetails=async ()=>{
            let data=await getMessages(conversation._id);
            console.log(data);
            setMessages(data);
        }
        conversation._id && getMessageDetails();
    }, [person._id, conversation._id, messageFlag]);

    const sendText=async (e)=>{ 
        const code=e.keyCode || e.which;
        if(code===13){
            let message={};
            if (!file) {
                message = {
                    senderId: account.sub,
                    receiverId: person.sub,
                    conversationId: conversation._id,
                    type: 'text',
                    text: value
                }
            } else {
                message = {
                    senderId: account.sub,
                    conversationId: conversation._id,
                    receiverId: person.sub,
                    type: 'file',
                    text: image
                };
            }

            await newMessage(message);

            setValue("");
            setFile("");
            setImage("");

            setMessageFlag(!messageFlag);
        }
    }

    return (
        <Wrapper>
            <Component>
            {
                messages && messages.map(message=>(
                    <Container ref={scrollRef}>
                    <Message message={message}/>
                    </Container>
                ))
            }
            </Component>
            <Footer 
            sendText={sendText}
            setValue={setValue}
            value={value}
            file={file}
            setFile={setFile}
            setImage={setImage}
            />
        </Wrapper>
    );
}

export default Messages;