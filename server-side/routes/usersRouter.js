
const express = require("express");
const userRouter = express.Router();
const {createUser,getAllUsers,getUsersByUserName,updateUser} = require('../controllers/usersController')
 
userRouter.get("/", async(req, res)=>{
  console.log(req.query.userName)
  if(req.query.userName){
    const usersRes=await getUsersByUserName(req.query.userName);
       return res.status(200).json(usersRes);
  }
  else
  getAllUsers();
 }
 );
 userRouter.post("/", (async(req,res)=>
   {
    const userRes= await createUser(req.body);

    res.status(200).json({ insertId: userRes.insertId });}
 ));

 userRouter.put("/:id",(async(req,res)=>{
  const userRes=await updateUser(req.body,req.params.id);
  res.status(200).json(userRes);

 }));

module.exports= userRouter;
