const express = require("express");
const postRouter = express.Router();
const {deletePostById,createPostC,getPostByIdC,getAllPostsC} = require('../controllers/postsController');

postRouter.get("/:id", (async(req,res)=>{
  await getPostByIdC(req,res)
}));
 postRouter.get("/", getAllPostsC);

 postRouter.post("/", createPostC);

 postRouter.delete("/:id",(async(req,res)=>{
 await deletePostById(req,res)
}));

//  postRouter.put("/:id",(async(req,res)=>{
//  const post=await updatePost(req,res)
// res.send(post)}));

module.exports= postRouter;