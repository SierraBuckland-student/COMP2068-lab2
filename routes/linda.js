var express = require('express');
var router = express.Router();

/* Linda/Mom Page */
router.get('/', (req, res, next) => {
  res.render('linda', {layout: 'header', title: 'Linda' });
});

module.exports = router;
