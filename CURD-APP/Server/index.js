import express from "express"
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import route from "./Routes/userRoute.js";


const app=express();
app.use(bodyParser.json());
app.use(cors());




const url=process.env.MONGOURL;

mongoose.connect(url).then(()=>{
console.log("DB Conected");
app.listen(process.env.PORT ,()=>{
    console.log(`Server is Running on Port ${process.env.PORT}` );
})

}).catch(error=>console.log(error));

app.use("/api",route)