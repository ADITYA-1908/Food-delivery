import mongoose from "mongoose";

export const connectDB = async() =>{
    await mongoose.connect('mongodb+srv://adisubham:subham1908@cluster0.tgq4ipi.mongodb.net/Food-delivery').then(()=>{
        console.log("MongoDB is connected")
    })
}

//You can’t connect yet. Set up your firewall access and user security permissions first. 
//Then you’ll be able to see your connection options.
// await mongoose.connect('mongodb+srv://adisubham:subham1908@cluster0.tgq4ipi.mongodb.net/Food-delivery').then(()=>{