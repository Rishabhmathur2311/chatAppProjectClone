import React, { useContext, useEffect, useState } from "react";
import {Box} from "@mui/material";
import { getUsers } from "../../service/api";
import Conversation from "./Conversation";
import { AccountContext } from "../../context/AccountProvider";

const Conversations=({text})=>{

    const [users, setUsers]=useState([]);
    const {account, socket, setActiveUsers}=useContext(AccountContext);
    

    useEffect(()=>{
        const fetchData=async()=>{
            let data = await getUsers();
            let filteredData = data.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
        setUsers(filteredData);
        }
        fetchData();
    }, [text]);

    return (
        <Box>
            {users.map(user=>(
                user.sub!==account.sub &&
                <Conversation user={user}/>
            ))}
        </Box>
    );
}

export default Conversations;