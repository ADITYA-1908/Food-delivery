import cors from "cors"
import 'dotenv/config.js'
import express from "express"
import { connectDB } from "./config/db.js"
import cartRouter from "./routes/cartRoute.js"
import foodRouter from "./routes/foodRoute.js"
import orderRouter from "./routes/orderRoute.js"
import userRouter from "./routes/userRoute.js"
//app config
const app =express()
const port =4000

//middleware
app.use(express.json())
app.use(cors()) //access backend from frontend

//db connection 
connectDB();

//api endpoint
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter);



app.get("/",(req,res)=>{
    res.send("API Working")

}) //use to request the data from server


app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
}) //host the server

//mongodb+srv://adityayt2003:<password>@cluster0.fwcmrqf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

//mongodb+srv://adisubham:<db_password>@cluster0.tgq4ipi.mongodb.net/?      now