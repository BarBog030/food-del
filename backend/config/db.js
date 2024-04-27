import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://foodapp:XerreX42212@cluster0.cv7bogf.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}