
const express = require("express");
const userRouter = express.Router();
const {createUserC,getByEmail,getAllUsers} = require('../controllers/usersController')
userRouter.get("/:userEmail",(async(req,res)=>{console.log("userRouter "+req.params.userEmail);
await getByEmail(req,res)
}));


 userRouter.get("/", getAllUsers);
 userRouter.post("/", (async(req,res)=>
   { await createUserC(req,res);}
 ));

// // usersRouter.delete("/:id", usersController.deleteUser);
// // usersRouter.put("/:id", usersController.updateUser);    לשאול אם צריך

module.exports= userRouter;
