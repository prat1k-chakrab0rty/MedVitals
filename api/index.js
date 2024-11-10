import express from "express";
import { createServer } from 'node:http';
import testRoute from "./routes/test.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

const server = createServer(app);

app.use(express.json());

app.use(cookieParser());

app.use(cors());


app.use("/api/test", testRoute);


//error handling middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Something went wrong";
    res.status(statusCode).json({ data: null, message });
});

server.listen(8080, () => {
    console.log(`Backend is active on port number 8080!`);
});