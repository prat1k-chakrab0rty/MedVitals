import express from "express";
import { createServer } from 'node:http';
import testRoute from "./routes/test.js";
import authRoute from "./routes/auth.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

const server = createServer(app);

mongoose.connect("mongodb+srv://pratik-c:Pratik-C@main.u5gy3.mongodb.net/?retryWrites=true&w=majority&appName=main").then((result) => {
    console.log('connected to Mongodb');
}).catch((err) => {
    console.error(err);
});

app.use(express.json());

app.use(cookieParser());

app.use(cors());


app.use("/api/test", testRoute);
app.use("/api/auth", authRoute);


//error handling middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Something went wrong";
    res.status(statusCode).json({ data: null, message });
});

server.listen(8080, () => {
    console.log(`Backend is active on port number 8080!`);
});