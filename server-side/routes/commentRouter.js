const express = require("express");
const commentRouter = express.Router();
const {updateComment,deleteCommentById,createCommentC,getCommentByIdC,getAllCommentsC} = require('../controllers/commentsController');

commentRouter.get("/:id", (async(req,res)=>{
  await getCommentByIdC(req,res)
}));
commentRouter.get("/", getAllCommentsC);

commentRouter.post("/", (async(req,res)=>
{await createCommentC(req,res);}
));
 commentRouter.delete("/:id",(async(req,res)=>{
 await deleteCommentById(req,res)
}));
commentRouter.put("/:id",(async(req,res)=>{
  await updateComment(req,res)
  //res.send(comm)
 }));

module.exports= commentRouter;