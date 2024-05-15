
const express = require("express");
const loginRouter = express.Router();
const {loginUser} = require('../controllers/usersController');
loginRouter.post("/", (async(req,res)=>

{
    console.log("**************",req.body);
  const userRes= await loginUser(req.body.userName,req.body.password);
   return res.status(200).json(userRes);
   }
));
module.exports= loginRouter;