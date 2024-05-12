const express = require("express");
const commentRouter = express.Router();
const {updateComment,deleteCommentById,createComment,getCommentById,getAllComments} = require('../controllers/commentsController');

commentRouter.get("/:id", (async(req,res)=>{
  await getCommentById(req,res)
}));
commentRouter.get("/", getAllComments);

commentRouter.post("/", (async(req,res)=>
{await createComment(req,res);}
));
 commentRouter.delete("/:id",(async(req,res)=>{
 await deleteCommentById(req,res)
}));
commentRouter.put("/:id",(async(req,res)=>{
  await updateComment(req,res)
  //res.send(comm)
 }));

module.exports= commentRouter;