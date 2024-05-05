
const express = require("express");
const userRouter = express.Router();
const {createUserC,getByEmail,getAllUsers} = require('../controllers/usersController')
userRouter.get("/:userEmail",(async(req,res)=>{console.log("userRouter "+req.params.userEmail);
const user=await getByEmail(req,res)
res.send(user)}));


 userRouter.get("/", getAllUsers);
 userRouter.post("/", createUserC);

// // usersRouter.delete("/:id", usersController.deleteUser);
// // usersRouter.put("/:id", usersController.updateUser);    לשאול אם צריך

module.exports= userRouter;
