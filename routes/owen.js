var express = require('express');
var router = express.Router();

/* Owen/Younger Brother Page */
router.get('/', (req, res, next) => {
  res.render('owen', {layout: 'header', title: 'Owen' });
});

module.exports = router;
