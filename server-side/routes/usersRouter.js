
const express = require("express");
const userRouter = express.Router();
const {createUserC,getAllUsers,getUsersByUserName,updateUser} = require('../controllers/usersController')
 userRouter.get("/", (req, res)=>{
  if(req.query.userName){
    
    getUsersByUserName(req,res);
  }
  else
  getAllUsers(req,res);
 }
 );
 userRouter.post("/", (async(req,res)=>
   { await createUserC(req,res);}
 ));

 userRouter.put("/:id",(async(req,res)=>{
  await updateUser(req,res)
 }));

module.exports= userRouter;
