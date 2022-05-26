const { Router } = require("express");
const { newsController } = require("../controllers/news.controller");


const router = Router();

router.get('/news', newsController.getNews);
router.get('/news/:id', newsController.getNewById);
router.get('/news/category', newsController.getNewsByCategory);
router.post('/news/:id', newsController.postNew);
router.delete('/news/:id', newsController.deleteNew);
router.patch('/news/:id', newsController.patchNew);

module.exports = router;