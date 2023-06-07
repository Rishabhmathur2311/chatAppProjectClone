import user from "../model/User.js"

export const addUser=async(req, res)=>{
    try {
       let exist=await user.findOne({sub: req.body.sub});
       if(exist){
            res.status(200).json({msg: 'user already exists'});
            return ;
       }

       const newUser= new user(req.body);
       await newUser.save();
       return res.status(200).json(newUser);
    } catch (error) {
        return res.status(500).json(error);
    }
}

export const getUsers=async(req, res)=>{
    try {
       const users=await user.find({});
       return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}