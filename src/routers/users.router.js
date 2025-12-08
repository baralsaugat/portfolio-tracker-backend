import express from "express"


const router = express.Router();


import {createUser} from "../models/users/users.model.js"

// registration
router.post("/", async(req, res) =>{
    
    try {
       const result = await createUser({...req.body})

       if(result?._id){
        return res.json({
            status:"success", 
            message:"Registration success"
        })
       }
       res.json({
        status:"error", 
        message:"could not register this account"
       })
    } catch (error) {
        res.json({
            status: "error",
            message:error.message
        })
    }
})
export default router