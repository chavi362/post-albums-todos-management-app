const model = require('../models/usersModel');

async function createUser(req,res){
    try{

        const userRes= model.createUser(req.body);
        res.status(200).json({ insertId: userRes.insertId });
    }catch(err){
        throw err;
    }
    
}

async function loginUser(req,res){
    try{
       const userRes=await model.loginUser(req.body.userName,req.body.password);
       return res.status(200).json(userRes);
    }catch(err){
        throw err;
    } 
}
async function registerUser(req,res){
    try{
       const userRes=await model.registerUser(req.body.userName,req.body.password);
       return res.status(200).json(userRes);
    }catch(err){
        throw err;
    } 
}
async function getUsersByUserName(req,res){
    try{
       const usersRes=await model.getUsersByUserName(req.query.userName);
       return res.status(200).json(usersRes);
    }catch(err){
        throw err;
    }
}
async function getAllUsers(req, res) {
        const resultItems = await model.getAllUsers();
        return res.status(200).json(resultItems);
}
   

async function updateUser(req, res) {
    console.log('====================================');
    console.log(req.body);
    console.log('====================================');
    try {
        const user=await model.updateUser(req.body,req.params.id);
        res.status(200).json(user);
    }
    catch (err) {
        throw err;
    }
}
module.exports = {createUser,loginUser,getAllUsers,getUsersByUserName,registerUser,updateUser}