import express from "express";
import { createUser, deleteUser, getAllUser, getUser, updateUser } from "../controllers/userControllers.js";
import { verifyToken,verifyUser,verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication",verifyToken,(req,res,next)=>{
//     res.send("hello user, you are logged in")
// })

// router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
//     res.send("hello user, you are logged in and you can delete your account")
// })

// router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
//     res.send("hello admin, you are logged in and you can delete all accounts")
// })

//create
router.post("/",verifyUser,createUser);
    
//Update
router.put("/:id",verifyUser,updateUser);

//Delete
router.delete("/:id",verifyUser,deleteUser);

//Get
router.get("/:id",verifyUser,getUser);

//Get All
router.get("/",verifyAdmin,getAllUser);



export default router