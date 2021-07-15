var express = require('express');
var router = express.Router();
var salePostsController = require('../controllers/saleposts');
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });


router.get('/', function(req, res, next) {
  res.send('posts api get response');
});

router.get('/list', salePostsController.show);

router.get("/:id", salePostsController.getPostById)

router.post("/new", upload.array('files', 12), salePostsController.create)

module.exports = router;