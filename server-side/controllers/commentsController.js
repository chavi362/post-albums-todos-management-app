const model = require('../models/commentsModel');

async function createCommentC(req, res) {
    try {
        console.log("req.body ",req.body);
        const commentRes =await model.createComment(req.body);
        res.status(200).json(commentRes);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }

}

async function getCommentByIdC(req, res) {
    try {
        const commentRes = await model.getCommentById(req.params.id);
        return res.status(200).json(commentRes);
    } catch (err) {
        throw err;
    }

}


async function getAllCommentsC(req, res) {
    try{
    const resultItems = await model.getAllComments(req.query.postId);
    res.status(200).json(resultItems); 
} catch (err) {
    console.error('Errory in getAllPostsC:', err);
    res.status(500).json({ error: 'Internal Server Error' }); 
}
}
async function updateComment(req, res) {
    try {
        await model.updateCommentM(req.body,req.params.id);
        res.status(200).json({ status: 200, data: req.params });
    }
    catch (err) {
        throw err;
    }
}
async function deleteCommentById(req, res) {
    try {
        await model.deleteComment(req.params.id, "id");
        return res.status(200).json({ status: 200, data: req.params.id });
    } catch (err) {
        throw err;
    }
}

module.exports = {updateComment,deleteCommentById, createCommentC, getCommentByIdC, getAllCommentsC }