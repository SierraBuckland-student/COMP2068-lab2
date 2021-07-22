var express = require('express');
var router = express.Router();

/* Finn/Pet Dog Page */
router.get('/', (req, res, next) => {
  res.render('finn', { title: 'Finn' });
});

module.exports = router;
