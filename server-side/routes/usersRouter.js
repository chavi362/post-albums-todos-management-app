const express = require("express");
const router = express.Router();
const controller = require('../controllers/usersController')
router.use (express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/:id", async(req, res) => {
    const id = req.params.id;
    const toy = await controller.getById(id);
    res.send(toy)
});

router.post("/", async(req, res) => {
    try{//name,userName,email,address,password,phone,company
        const response=await controller.create(req.body.name,req.body.userName,req.body.email,req.body.address,req.body.password,req.body.phone,req.body.company)
        res.send(await (response.insertId));
    }catch(err){
        res.sendFile(path.join(__dirname, '../public', 'error.html'));
    }
   
});