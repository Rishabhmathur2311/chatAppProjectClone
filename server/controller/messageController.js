import Message from "../model/Message.js";
import Conversation from "../model/Conversation.js";

export const newMessage=async(req, res)=>{
    try {
        const newMessage=new Message(req.body);

        await newMessage.save();

        await Conversation.findByIdAndUpdate(req.body.conversationId, {message: req.body.text});
        console.log(newMessage);

        return res.status(200).json(newMessage);
          
    } catch (error) {
        return res.status(500).json("error in loading new message", error.message);
    }
}

export const getMessages=async (request, response)=>{
    try {
        const messages=await Message.find({conversationId: request.params.id});
        return response.status(200).json(messages);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}