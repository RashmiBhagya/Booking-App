import express from "express";
import { createHotel, deleteHotel, getAllHotels, getHotel, updateHotel } from "../controllers/hotelControllers.js";
const router = express.Router();
import { verifyAdmin } from "../utils/verifyToken.js";

//create
router.post("/",verifyAdmin,createHotel);
    
//Update
router.put("/:id",verifyAdmin,updateHotel);

//Delete
router.delete("/:id",verifyAdmin,deleteHotel);

//Get
router.get("/:id",getHotel);

//Get All
router.get("/",getAllHotels);

export default router