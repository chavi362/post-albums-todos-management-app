const model = require('../models/usersModel');

async function createUserC(req,res){
    try{

        const userRes= model.createUserM(req.body);
        res.status(200).json({ insertId: userRes.insertId });
    }catch(err){
        throw err;
    }
    
}

async function getByUserName(req,res){
    try{
       const userRes=await model.getUserByUserName(req.params.userName);
       return res.status(200).json(userRes);
    }catch(err){
        throw err;
    }
    
}
async function getAllUsers(req, res) {
        const resultItems = await model.getAllUsers();
        return res.status(200).json(resultItems);
}
   

// async function getById(id){
//     try{
//         return model.getUser(id);
//     }catch(err){
//         throw err;
//     }
    
// }
module.exports = {createUserC,getByUserName,getAllUsers}