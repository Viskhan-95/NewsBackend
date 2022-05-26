const { default: mongoose } = require("mongoose");
const Categories = require("../models/Category.model");

module.exports.categoryController = {
    getCategory: (reg, res) => {
        Categories.find().then((data) => {
            res.json(data)
        })
    },
    postCategory: (reg, res) => {
        Categories.create({
            nameCategory: reg.body.nameCategory
        }). then(() => {
            res.json('Категория добавлена')
        })
    },
    deleteCategory: (reg, res) => {
        Categories.findByIdAndRemove(reg.params.id)
        .then(() => {
            res.json("Категория удалена")
        })
    }
}