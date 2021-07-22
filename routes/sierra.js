var express = require('express');
var router = express.Router();

/* Sierra/Me Page */
router.get('/', (req, res, next) => {
  res.render('sierra', {layout: 'header', title: 'Sierra' });
});

module.exports = router;
