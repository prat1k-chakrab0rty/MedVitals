import express from "express";
import User from "../schemas/User.js";
// import User from "../schemas/User";

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

export default router;