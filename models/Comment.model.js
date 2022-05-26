const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
    newId: {
        ref: 'New',
        type: mongoose.SchemaTypes.ObjectId
    },
    nameCommentator:String,
    textCommentator: String
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;