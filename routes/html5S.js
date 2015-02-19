var express = require('express');
var router = express.Router();

/* HTML5 Study. */
router.get('/', function(req, res) {
  res.render('html5S', { title: 'ED JJ HOME' });
});

module.exports = router;
