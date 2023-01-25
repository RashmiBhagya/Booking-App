import express from "express";
import { createHotel, deleteHotel, getAllHotels, getHotel, updateHotel } from "../controllers/hotelControllers.js";
const router = express.Router();

//create
router.post("/",createHotel);
    
//Update
router.put("/:id",updateHotel);

//Delete
router.delete("/:id",deleteHotel);

//Get
router.get("/:id",getHotel);

//Get All
router.get("/",getAllHotels);

export default router