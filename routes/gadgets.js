var express = require('express');
const gadgets_controlers= require('../controllers/gadgets'); 
var router = express.Router();

/* GET home page. */
router.get('/', gadgets_controlers.gadgets_view_all_Page );
module.exports = router;