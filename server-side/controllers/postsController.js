const model = require('../models/postsModel');

async function createPostC(req, res) {
    try {
        const postRes = model.createPost(req.body);
        res.status(200).json({ insertId: postRes.insertId });
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
    const resultItems = await model.getAllPosts();
    return res.status(200).json(resultItems);
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
module.exports = {updatePost, deletePostById, createPostC, getPostByIdC, getAllPostsC }