const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 3000;
const usersRouter = require("./routes/usersRouter"); // Assuming correct path


app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const router = express.Router();
const { create, getByEmail, getById } = require('../controllers/usersController');

router.route('/')
  .post(create);

module.exports = router;