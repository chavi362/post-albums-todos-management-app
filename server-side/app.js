const express = require('express');
const userRouter = require('./routes/usersRouter');
const app = express();

const port = 3000;

app.use("/users", userRouter);

app.get('/', (req,res) => { res.send("goodluck!!! omeyn!!"); })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});



