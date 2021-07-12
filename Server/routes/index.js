const express = require('express');
const router = express.Router();


router.use('/users', require('./users'));

console.log('Router loaded');
module.exports = router;