var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { 
  //   title: 'Express Dev Skills' }
})
})

// router.get('/skill', (req, res) => {
//   res.render('skill', {
//         title: () {
// })
// })

module.exports = router;
