import Users from "../models/Users.js"

export const updateUsers = async(req,res,next)=>{
    try{
        const updatedUsers = await Users.findByIdAndUpdate(req.params.id,{$set: req.body},{new: true});
        res.status(200).json(updatedUsers);
    }catch(err){
        next(err);
    }
}
export const deleteUsers = async(req,res,next)=>{
    try{
        await Users.findByIdAndDelete(req.params.id);
        res.status(200).json("User is deleted");
    }catch(err){
        next(err);
    }
}
export const getUser = async(req,res,next)=>{
    try{
        const user = await Users.findById(req.params.id);
        res.status(200).json(user);
    }catch(err){
        next(err);
    }
}
export const getUsers = async(req,res,next)=>{
    try{
        const users = await Users.find();
        res.status(200).json(users);
    }catch(err){
        next(err);
    }
}