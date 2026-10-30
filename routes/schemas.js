const express = require('express');
const router = express.Router();
const schemaController = require('../controllers/schemaController');

router.get('/:schemaName', schemaController.fetchSchemaUrl);

module.exports = router;