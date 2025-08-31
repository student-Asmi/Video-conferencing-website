import express from "express";
import {createServer} from "node:http";

import { Server } from "socket.io";

import mongoose from "mongoose";

import cors from "cors";
import {connectToSocket} from "./controllers/socketManager.js";
import userRoutes from "./routes/users.routes.js";


const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", (process.env.PORT || 8000));
app.use(cors());
app.use(express.json({limit: "40kb"}));
app.use(express.urlencoded({limit : "40kb", extended: true}));

app.use("/api/v1/users", userRoutes);

app.get("/home", (req,res) =>{
    return res.json({"hello": "world"})
});

const start = async () =>{
    app.set("mongo_user")
        const connectionDb = await mongoose.connect("mongodb+srv://asmiverma:experience0509@cluster0.k6jmtsp.mongodb.net/")
        console.log(`MONGO Connected to DB Host: ${connectionDb.connection.host}`)
        server.listen(app.get("port"), () =>{
        console.log("listening to port 8000")
    })


}

start();