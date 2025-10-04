import express from 'express';
import cors from "cors";
import dotenv from "dotenv"; 

const app = express()
dotenv.config({path:"./config/config.env"});
//.use for middleware
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["POST"],
    credentials:true
}))
//string ko json obj me convert krdega
app.use(express.json());
app.use(express.urlencoded({extended: true}));

export default app;