const { default: mongoose } = require("mongoose");
const Comments = require("../models/Comment.model");

module.exports.commentsController = {
    getComments: (reg, res) => {
        Comments.find({ObjectId:reg.params.id})
        .then((data) => {
            res.json(data)
        })
    },
    postComments: (reg, res) => {
        Comments.create({
            newId: reg.params.id,
            nameCommentator: reg.body.nameCommentator,
            textCommentator: reg.body.textCommentator
        }).then(() =>  {
            res.json("Комментария добавлена")
        })
    },
    deleteComments: (reg, res) => {
        Comments.findByIdAndRemove(reg.params.id)
        .then(() => {
            res.json("Комментария удалена")
        })
    }
}