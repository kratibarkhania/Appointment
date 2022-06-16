import express from "express";
import {createSlot,updateSlot,deleteSlot,getSlot,getSlots} from "../controllers/slot.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();
//CREATE
router.post("/:doctorid",verifyAdmin,createSlot);
//UPDATE
router.put("/:id",verifyAdmin,updateSlot);
//DELETE
router.delete("/:id/:doctorid",verifyAdmin,deleteSlot);
//GET 
router.get("/:id",getSlot);
//GET ALL
router.get("/",getSlots);
export default router