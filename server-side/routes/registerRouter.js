
const express = require("express");
const registerRouter = express.Router();
const {registerUser} = require('../controllers/usersController');
registerRouter.post("/", (async(req,res)=>
    {
        const userRes= await registerUser(req.body.userName,req.body.password);
        return res.status(200).json(userRes);
    }
    ));
    
module.exports= registerRouter;