const {Router} = require('express')

const router = Router();

router.use(require("./categories.router"));
router.use(require("./comments.router"));
router.use(require("./news.router"));

module.exports = router;