var express = require('express');
const gadgets_controlers= require('../controllers/gadgets'); 
var router = express.Router();

const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}

/* GET home page. */

// router.get('/', function (req, res, next) {
//     res.render('gadgets',{title:'Search Results'});
// });
router.get('/', gadgets_controlers.gadgets_view_all_Page ); 
router.get('/detail', gadgets_controlers.gadgets_view_one_Page);
router.get('/create', secured, gadgets_controlers.gadgets_create_Page);
router.get('/update', secured, gadgets_controlers.gadgets_update_Page);
router.get('/delete', secured, gadgets_controlers.gadgets_delete_Page);
module.exports = router;