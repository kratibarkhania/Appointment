import express from "express";
import {updateUsers,deleteUsers,getUser,getUsers} from "../controllers/users.js"
import { verifyToken, verifyUser ,verifyAdmin} from "../utils/verifyToken.js";

const router = express.Router();
/*router.get("/checkauthentication",verifyToken,(req,res,next)=>{
    res.send("hello user,u are logged in")
})
router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
    res.send("hello user,u are logged in and u can delete your account")
})
router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
    res.send("hello admin,u are logged in and u can delete all accounts")
})*/
//UPDATE
router.put("/:id",verifyUser,updateUsers);
//DELETE
router.delete("/:id",verifyUser,deleteUsers);
//GET 
router.get("/:id",verifyUser,getUser);
//GET ALL
router.get("/",verifyAdmin,getUsers);
export default router