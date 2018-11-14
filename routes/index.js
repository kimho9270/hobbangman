const express = require('express');
const clova = require('../clova');
const router = express.Router();

router.post(`/clova`, clova);
router.get('/', function(req, res){
    res.send('Hello Hotea');
})

module.exports = router;
