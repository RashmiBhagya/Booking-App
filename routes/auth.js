import express from "express";
import { register } from "../controllers/authControllers.js";


const router = express.Router();

router.get("/register",register)

export default router