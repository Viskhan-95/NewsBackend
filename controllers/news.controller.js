const { default: mongoose } = require("mongoose");
const News = require("../models/New.model");

module.exports.newsController = {
    getNewById: (reg, res) => {
        News.findById(reg.params.id)
        .then((data) => {
            res.json(data)
        })
    },
    getNews: (reg, res) => {
        News.find().then((data) => {
            res.json(data)
        })
    },
    getNewsByCategory: (reg, res) => {
        News.find({ObjectId: reg.params.id})
        .then((data) => {
            res.json(data)
        })
    },
    postNew: (reg, res) => {
        News.create({
            headText: reg.body.headText,
            text: reg.body.text,
            categoryId: reg.params.id
        }). then(() => {
            res.json('Новость добавлена')
        })
    },
    deleteNew: (reg, res) => {
        News.findByIdAndRemove(reg.params.id)
        .then(() => {
            res.json("Новость удалена")
        })
    },
    patchNew: (reg, res) => {
        News.findByIdAndUpdate(reg.params.id, 
            {text: reg.body.text})
            .then(() => {
                res.json("Новость изменена")
            })
    }
}