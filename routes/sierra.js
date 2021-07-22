var express = require('express');
var router = express.Router();

/* Sierra/Me Page */
router.get('/', (req, res, next) => {
  res.render('sierra', { title: 'Sierra' });
});

module.exports = router;
