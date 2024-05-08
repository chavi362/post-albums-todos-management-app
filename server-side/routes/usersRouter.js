
const express = require("express");
const userRouter = express.Router();
const {createUserC,getByUserName,getAllUsers} = require('../controllers/usersController')
// userRouter.get("/:userName",(async(req,res)=>{
// await getByUserName(req,res)
// }));


 userRouter.get("/", getAllUsers);
 userRouter.post("/", (async(req,res)=>
   { await createUserC(req,res);}
 ));

// // usersRouter.delete("/:id", usersController.deleteUser);
// // usersRouter.put("/:id", usersController.updateUser);    לשאול אם צריך

module.exports= userRouter;
