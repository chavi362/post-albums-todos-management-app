const express = require('express');
const userRouter = require('./routes/usersRouter');
const todoRouter = require('./routes/todosRouter');
const postRouter = require('./routes/postsRouter');
const loginRouter = require('./routes/loginRouter');
const registerRouter=require('./routes/registerRouter')
const commentRouter = require('./routes/commentRouter');
const cors = require('cors');
const app = express();
app.use(express.urlencoded({ extended: true }));//ask teacher why don't work!
app.use(express.json());
app.use(cors());
const port = 3000;                   
app.use("/login", loginRouter);
app.use("/users", userRouter);
app.use("/todos", todoRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);
app.use("/register", registerRouter);
app.get('/', (req, res) => { res.send("goodluck!!! omeyn!!"); })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


