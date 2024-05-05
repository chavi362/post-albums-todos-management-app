const pool = require('../DB.js');
const { createObject, getObjectByPram, deleteObject, updateObject, getObjects } = require("./queryModel.js");

async function getPosts(limit,start,sort) {
    const queryUsers = getQuery("posts",limit,start);
    const result = await query(queryUsers);
    return result;
}
async function getPostById(id,limit,start,sort) {
    const queryPost = getByIdQuery("posts","id",limit,start);
    const result =  await query(queryPost, [id]);
    return result;
}

async function deletePost(id,idParameter) {
    console.log(id);
    await commentsService.deleteComment(id,"post_id");
    const queryPost = deleteByIsActiveQuery("posts",`${idParameter}`);
    const result =  await query(queryPost, [id]);
    return result;
}

async function updatePost(updatedPost) {
    const queryUser =updateQuery("posts","title = ?, body = ?","id");
    console.log("updated post: "+ updatedPost.title+" "+updatedPost.body+" "+updatedPost.id);
    const result =  await query(queryUser, [updatedPost.title, updatedPost.body,updatedPost.id]);
    return result;
}
async function addPost(Post) {
    const queryUser =addQuery("posts","user_id, title, body","?,?,?");
    const result =  await query(queryUser, [Post.user_id, Post.title, Post.body]);
    return result;
}