import express from "express";

const router = express.Router();

router.get("/", (req, res, next) => {
    try {
        res.status(200).json("hello medvitals!")
    } catch (err) {
        next(error(500, err));
    }
});

export default router;

