var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET docs page. */
router.get('/docs', function(req, res, next) {
  res.render('docshome');
});

/* GET docs page. */
router.get('/docs/usage', function(req, res, next) {
  res.render('docsusage');
});

/* GET docs page. */
router.get('/docs/developer', function(req, res, next) {
  res.render('docsdeveloper');
});

module.exports = router;
