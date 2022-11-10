var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var gadgets_controller = require('../controllers/gadgets'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/gadgets', gadgets_controller.gadgets_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/gadgetss/:id', gadgets_controller.gadgets_delete); 
 
// PUT request to update Costume. 
router.put('/gadgetss/:id', gadgets_controller.gadgets_update_put); 
 
// GET request for one Costume. 
router.get('/gadgetss/:id', gadgets_controller.gadgets_detail); 
 
// GET request for list of all Costume items. 
router.get('/gadgetss', gadgets_controller.gadgets_list); 
 
module.exports = router; 