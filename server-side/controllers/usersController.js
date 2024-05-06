const model = require('../models/usersModel');

async function createUserC(req, res) {
    try {
        console.log("req!!!!!!!!!!************* " + req.body);
        const { name, userName, email, address, password, phone, company } = req.body;
        await model.createUserM(name, userName, email, address, password, phone, company);
        res.status(201).send("User created successfully");


        // const userRes= model.createUserM(req.body);
        // res.status(200).json({ insertId: userRes.insertId });
    } catch (err) {
        throw err;
    }

}


async function getByEmail(req, res) {
    try {
        const userRes = await model.getUserByEmail(req.params.userEmail);
        return res.status(200).json(userRes);
    } catch (err) {
        throw err;
    }

}
async function getAllUsers(req, res) {
    const resultItems = await model.getAllUsers();
    console.log("controler " + resultItems.length);
    return res.status(200).json(resultItems);
}


// async function getById(id){
//     try{
//         return model.getUser(id);
//     }catch(err){
//         throw err;
//     }

// }
module.exports = { createUserC, getByEmail, getAllUsers }