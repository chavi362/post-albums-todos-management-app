
const express = require("express");
const userRouter = express.Router();
const {create,getByEmail,getAllUsers} = require('../controllers/usersController')
userRouter.get("/:userEmail", getByEmail);
 userRouter.get("/", getAllUsers);
// // usersRouter.put("/:id", usersController.updateUser);
// // usersRouter.delete("/:id", usersController.deleteUser);
 userRouter.post("/", create);

// userRouter.route('/')
//     .get(async (req, res) => {
//         const users = await getAllUsers();
//         res.send(users)
//     })
//     .post(async (req, res) => {
//         const user = req.query
//         res.send(await create({name:user.name, userName:user.username, email:user.email,address:user.address,password:user.password, phone:user.phone,company:user.company}))
//     });

module.exports= userRouter;
