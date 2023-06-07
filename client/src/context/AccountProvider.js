import React, { createContext, useState} from "react";

export const AccountContext= createContext();

const AccountProvider=({children})=>{

    const [account, setAccount]=useState();
    
    const [person, setPerson]= useState({});
    const [activeUsers, setActiveUsers]=useState([]);
    const [messageFlag, setMessageFlag]=useState(false);

    return (
        <AccountContext.Provider value={{
            account,
            setAccount,
            person,
            setPerson,
            activeUsers,
            setActiveUsers,
            messageFlag,
            setMessageFlag
        }}>
            {children}
        </AccountContext.Provider>
    );
}

export default AccountProvider;