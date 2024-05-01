const model = require('../models/usersModel');

async function create(name,userName,email,address,password,phone,company){
    try{
        return model.createUser(name,userName,email,address,password,phone,company);
    }catch(err){
        throw err;
    }
    
}

async function getAll(){

}

async function getById(id){
    try{
        return model.getUser(id);
    }catch(err){
        throw err;
    }
    
}
async function getByEmail(email){
    try{
        return model.getUserByEmail(email);
    }catch(err){
        throw err;
    }
    
}


module.exports = {create, getAll, getById,getByEmail}