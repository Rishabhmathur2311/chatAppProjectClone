import express from "express";
import Connection from "./database/db.js";
import Route from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import * as path from 'path';
dotenv.config();
const app=express();

app.use(cors());
app.use(bodyParser.json({exended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', Route);

//----------------------DEPLOYMENT

const __dirname1=path.resolve();
if(process.env.NODE_ENV==='production'){
    app.use(express.static(path.join(__dirname1,"..", "/client/build")));
    app.get('*', (req, res)=>{
        res.sendFile(path.resolve(__dirname1,"..", "client", "build", "index.html"));
    })
}else{
    app.get('/', (req, res)=>{
        res.send("API is running successfully");
    })
}

//--------------------DEPLOYMENT

Connection();

const PORT=8000;

app.listen(PORT, ()=> console.log(`server running on port ${PORT}`));