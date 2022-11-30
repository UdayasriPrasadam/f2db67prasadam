var express = require('express');
const gadgets= require('../controllers/gadgets'); 
var router = express.Router();

const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}

/* GET home page. */
router.get('/', gadgets.gadgets_view_all_Page);
router.get('/detail', gadgets.gadgets_view_one_Page);
router.get('/create', secured, gadgets.gadgets_create_Page);
router.get('/update', secured, gadgets.gadgets_update_Page);
router.get('/delete', secured, gadgets.gadgets_delete_Page);

module.exports = router;