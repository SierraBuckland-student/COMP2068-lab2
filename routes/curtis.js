var express = require('express');
var router = express.Router();

/* Curtis/Older Brother Page */
router.get('/', (req, res, next) => {
  res.render('curtis', {layout: 'header', title: 'Curtis' });
});

module.exports = router;
