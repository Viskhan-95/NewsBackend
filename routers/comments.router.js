const { Router } = require("express");
const { commentsController } = require("../controllers/comments.controller");


const router = Router();

router.get('/comment/:id', commentsController.getComments);
router.post('/comment/:id', commentsController.postComments);
router.delete('/comment/:id', commentsController.deleteComments);

module.exports = router;