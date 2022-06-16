import mongoose from 'mongoose';
const { Schema } = mongoose;
const SlotSchema = new mongoose.Schema({
    
    slotNumber:[{number:Number, unavailableDates:{type:[Date]}}]
},
{timestamps: true}
);

export default mongoose.model("Slot",SlotSchema)