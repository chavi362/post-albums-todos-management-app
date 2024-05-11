const express = require("express");
const postRouter = express.Router();
const {updatePost, deletePostById,createPostC,getPostByIdC,getAllPostsC,updatePostBody} = require('../controllers/postsController');
const postController = require('../controllers/postsController');


postRouter.get("/:id", (async(req,res)=>{
  await getPostByIdC(req,res)
}));
 postRouter.get("/", (req, res)=>{
    if(!req.query.user_id){
      postController.getAllPostsC(req,res)
    }
 });

 postRouter.post("/", (async(req,res)=>
   { await createPostC(req,res);}
 ));
 postRouter.delete("/:id",(async(req,res)=>{
 await deletePostById(req,res)
}));
postRouter.put("/:id",(async(req,res)=>{
 await updatePost(req,res)

}));
postRouter.patch("/:id",(async(req,res)=>{
  await updatePostBody(req,res)
 }));


module.exports= postRouter;