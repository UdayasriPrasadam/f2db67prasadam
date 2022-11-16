var express = require('express');
const gadgets= require('../controllers/gadgets'); 
var router = express.Router();

/* GET home page. */
router.get('/', gadgets.gadgets_view_all_Page);
router.get('/detail', gadgets.gadgets_view_one_Page);
router.get('/create', gadgets.gadgets_create_Page);
router.get('/update', gadgets.gadgets_update_Page);
router.get('/delete', gadgets.gadgets_delete_Page);

module.exports = router;