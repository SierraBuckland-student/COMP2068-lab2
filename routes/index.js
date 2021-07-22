var express = require('express');
var router = express.Router();

/* Landing Page */
router.get('/', function(req, res, next) {
  res.render('index', {layout: 'header', title: 'Home' });
});

module.exports = router;
