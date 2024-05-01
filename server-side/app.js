const express = require('express');
const path = require('path');
const app = express();
app.use (express.json());
app.use(express.urlencoded({ extended: true }));
const port = 3000;
const usersRouter=require("./routes/usersRouter")
app.use("/users",usersRouter);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });