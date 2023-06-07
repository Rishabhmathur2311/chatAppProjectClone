import Conversation from "../model/Conversation.js";

export const newConversation=async(req, res)=>{
    try {
        const senderId=req.body.senderId;
        const receiverId=req.body.receiverId;

        const exist=await Conversation.findOne({members: {$all: [receiverId, senderId]}});

        if(exist){
            return res.status(200).json("Conversation already exists");
        }

        const newConversation = new Conversation({
            members:[senderId, receiverId]
        })

        await newConversation.save();
        return res.status(200).json('conversation created successfully');
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

export const getConversation = async (request, response) => {
    try {
        const conversation = await Conversation.findOne({ members: { $all: [ request.body.senderId, request.body.receiverId] }});
        response.status(200).json(conversation);
    } catch (error) {
        response.status(500).json(error);
    }

}