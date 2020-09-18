var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.json('this it the teeeeeeeest');
});

module.exports = router;
