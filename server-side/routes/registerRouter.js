
const express = require("express");
const registerRouter = express.Router();
const {registerUser} = require('../controllers/usersController');
registerRouter.post("/", (async(req,res)=>
    {
        console.log("**************",req.body);
      await registerUser(req,res);
       }
    ));
    
module.exports= registerRouter;