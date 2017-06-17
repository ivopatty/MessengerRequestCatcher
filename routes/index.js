var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/webhook', function(req, res, next) {
  console.log(req.body);
    if (req.query['hub.verify_token'] === 'mySecretAccessToken') {
        res.send(req.query['hub.challenge']);
    }
    res.send('Error, wrong validation token');
});

router.post('/webhook', function(req, res) {
    var messaging_events = req.body.entry[0].messaging;
    console.log(req.body)
});

module.exports = router;
