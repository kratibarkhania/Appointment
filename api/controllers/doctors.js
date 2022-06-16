import Doctors from "../models/Doctors.js"
export const createDoctors = async(req,res,next)=>{
    const newDoctors = new Doctors(req.body) 
    try{
        const savedDoctors = await newDoctors.save()
        res.status(200).json(savedDoctors);
    }catch(err){
        next(err);
    }
};
export const updateDoctors = async(req,res,next)=>{
    try{
        const updatedDoctors = await Doctors.findByIdAndUpdate(req.params.id,{$set: req.body},{new: true});
        res.status(200).json(updatedDoctors);
    }catch(err){
        next(err);
    }
}
export const deleteDoctors = async(req,res,next)=>{
    try{
        await Doctors.findByIdAndDelete(req.params.id);
        res.status(200).json("Doctor is deleted");
    }catch(err){
        next(err);
    }
}
export const getDoctor = async(req,res,next)=>{
    try{
        const doctor = await Doctors.findById(req.params.id);
        res.status(200).json(doctor);
    }catch(err){
        next(err);
    }
}
export const getDoctors = async(req,res,next)=>{
    try{
        const doctors = await Doctors.find();
        res.status(200).json(doctors);
    }catch(err){
        next(err);
    }
}
export const countBySpecialisation = async(req,res,next)=>{
    const speciality = req.query.speciality.split(",")
    try{
        const list = await Promise.all(speciality.map(speciality=>{
            return Doctors.countDocuments({speciality:speciality})
        }));
        res.status(200).json(list);
    }catch(err){
        next(err);
    }
}