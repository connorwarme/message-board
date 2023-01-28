var express = require('express');
var router = express.Router();

const messages = [
  { 
    text: "Yo, what's up?",
    user: "Colin",
    added: new Date()
  },
  {
    text: "How're things?",
    user: "Caleb",
    added: new Date()
  },
  {
    text: "How you doing?",
    user: "Connor",
    added: new Date()
  }
]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MiniMessage Board', messages });
});

router.get('/new', (req, res, next) => {
  res.render('form', { title: 'New Message' })
})
router.post('/new', (req, res, next) => {
  // need fnality
})

module.exports = router;
