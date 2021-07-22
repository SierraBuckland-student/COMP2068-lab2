var express = require('express');
var router = express.Router();

/* Paul/Dad Page */
router.get('/', (req, res, next) => {
  res.render('paul', { title: 'Paul' });
});

module.exports = router;
