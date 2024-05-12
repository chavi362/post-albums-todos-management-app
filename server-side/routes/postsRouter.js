const express = require("express");
const postRouter = express.Router();
const {getUserPosts,updatePost, deletePostById,createPost,getPostById,getAllPosts,updatePostBody} = require('../controllers/postsController');
const postController = require('../controllers/postsController');


postRouter.get("/:id", (async(req,res)=>{
  await getPostById(req,res)
}));
 postRouter.get("/", (req, res)=>{
    if(!req.query.userId){
      postController.getAllPosts(req,res);
    }
    else{
      postController.getUserPosts(req,res);
    }
 });

 postRouter.post("/", (async(req,res)=>
   { await createPost(req,res);}
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