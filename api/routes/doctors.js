import express from "express";
import { createDoctors,getDoctor,getDoctors, updateDoctors,deleteDoctors, countBySpecialisation } from "../controllers/doctors.js";
import Doctors from "../models/Doctors.js";
import {createError} from "../utils/error.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();
//CREATE
router.post("/",verifyAdmin,createDoctors);
//UPDATE
router.put("/:id",verifyAdmin,updateDoctors);
//DELETE
router.delete("/:id",verifyAdmin,deleteDoctors);
//GET 
router.get("/find/:id",getDoctor);
//GET ALL
router.get("/",getDoctors);
router.get("/countBySpecialisation",countBySpecialisation);

export default router;