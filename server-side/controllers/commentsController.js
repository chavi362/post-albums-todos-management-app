const model = require('../models/commentsModel');

async function createCommentC(req, res) {
    try {
        const commentRes = model.createComment(req.body);
        res.status(200).json({ insertId: commentRes.insertId });
    } catch (err) {
        throw err;
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
    const resultItems = await model.getAllComments();
    return res.status(200).json(resultItems);
}

async function deleteCommentById(req, res) {
    try {
        await model.deleteComment(req.params.id, "id");
        return res.status(200).json({ status: 200, data: req.params.id });
    } catch (err) {
        throw err;
    }
}
module.exports = {deleteCommentById, createCommentC, getCommentByIdC, getAllCommentsC }