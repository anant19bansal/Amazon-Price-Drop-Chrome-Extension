const express = require('express');
const router = express.Router();
const scrapController = require('../controllers/scrap_controller');

router.post('/', scrapController.scrapper);

module.exports = router;