const express = require("express");
const commentRouter = express.Router();
const {deleteCommentById,createCommentC,getCommentByIdC,getAllCommentsC} = require('../controllers/commentsController');

commentRouter.get("/:id", (async(req,res)=>{
  await getCommentByIdC(req,res)
}));
commentRouter.get("/", getAllCommentsC);

 commentRouter.post("/", createCommentC);

 commentRouter.delete("/:id",(async(req,res)=>{
 await deleteCommentById(req,res)
}));

//  CommentRouter.put("/:id",(async(req,res)=>{
//  const Comment=await updateComment(req,res)
// res.send(Comment)}));

module.exports= commentRouter;