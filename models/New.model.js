const mongoose = require("mongoose");

const newSchema = mongoose.Schema({
    categoryId: {
        ref: "Category",
        type: mongoose.SchemaTypes.ObjectId
    },
    headText:String,
    text: String
});

const New = mongoose.model('New', newSchema);

module.exports = New;