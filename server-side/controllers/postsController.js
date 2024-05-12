const model = require('../models/postsModel');

async function createPostC(req, res) {
    try {
        const postRes =await model.createPost(req.body);
        console.log("**"+postRes);
        res.json(postRes);
    } catch (err) {
        throw err;
    }
}

async function getPostByIdC(req, res) {
    try {
        const postRes = await model.getPostById(req.params.id);
        return res.status(200).json(postRes);
    } catch (err) {
        throw err;
    }

}
async function getAllPostsC(req, res) {
    try {
        const page = req.query._page ? parseInt(req.query._page) : 1;
        const perPage = req.query._limit ? parseInt(req.query._limit) : 5;
        const resultItems = await model.getAllPosts(page,perPage);
        res.status(200).json(resultItems); 
    } catch (err) {
        console.error('Error in getAllPostsC:', err);
        res.status(500).json({ error: 'Internal Server Error' }); 
    }
}async function getUserPosts(req, res) {
    try {

        const resultItems = await model.getUserPosts(req.query.userId);
        res.status(200).json(resultItems); 
    } catch (err) {
        console.error('Error in getAllPostsC:', err);
        res.status(500).json({ error: 'Internal Server Error' }); 
    }
}

async function deletePostById(req, res) {
    try {
        await model.deletePost(req.params.id, "id");
        return res.status(200).json({ status: 200, data: req.params.id });
    } catch (err) {
        throw err;
    }
}
async function updatePost(req, res) {
    try {
        await model.updatePostM(req.body,req.params.id);
        res.status(200).json({ status: 200, data: req.params });
    }
    catch (err) {
        throw err;
    }
}
async function updatePostBody(req, res) {
    try {
        await model.updatePostBody(req.body,req.params.id);
        res.status(200).json({ status: 200, data: req.params });
    }
    catch (err) {
        throw err;
    }
}
module.exports = {getUserPosts,updatePost, deletePostById, createPostC, getPostByIdC, getAllPostsC,updatePostBody }