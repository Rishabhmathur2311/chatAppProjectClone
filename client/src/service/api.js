import axios from "axios";

const url='https://serversideproject-krbd.onrender.com';

export const addUser=async (data)=>{
    try {
        await axios.post(`${url}/add`, data);
    } catch (error) {
        console.log(error);
    }
}

export const getUsers=async ()=>{
    try {
        let response=await axios.get(`${url}/users`);
        return response.data;
    } catch (error) {
        console.log(error.message);
        
    }
}

export const setConversation=async (data)=>{
    try {
        await axios.post(`${url}/conversation/add`, data);
    } catch (error) {
        console.log(error.message);
    }
}

export const getConversation = async (users) => {
    try {
        let response = await axios.post(`${url}/conversation/get`, users);
        return response.data;
    } catch (error) {
        console.log('Error while calling getConversation API ', error);
    }
}

export const newMessage=async(data)=>{
    try {
        await axios.post(`${url}/message/add`, data);
    } catch (error) {
        console.log(error.message);
    }
}

export const getMessages=async (id)=>{
    try{
    let response=await axios.get(`${url}/message/get/${id}`);
    return response.data;
    }catch(error){
        console.log(error.message);
    }
}

export const uploadFile=async(data)=>{
try {
    return await axios.post(`${url}/file/upload`, data);
} catch (error) {
    console.log("error while calling the api", error.message);
}
}