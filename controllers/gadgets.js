var gadgets = require('../models/gadgets');
// List of all university
exports.gadgets_list = async function(req, res) {
    try{
    theGadgets = await gadgets.find();
    res.send(theGadgets);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
};
exports.gadgets_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await gadgets.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle university create on POST.

exports.gadgets_create_post = async function (req, res) {
    console.log(req.body)
    try {
        let document = new gadgets();
        
        document.gadget_type = req.body.gadget_type;
        document.gadget_price = req.body.gadget_price;
        document.gadget_version = req.body.gadget_version;

        let result = await document.save();
        res.send(result);
    } catch (err) {
        // console.log(err);
        res.send(err)
        res.status(500);
    }
};

// Handle university delete form on DELETE.
exports.gadgets_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await gadgets.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle university update form on PUT.
exports.gadgets_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await gadgets.findById(req.params.id)
        // Do updates of properties
        if (req.body.gadget_type) toUpdate.gadget_type = req.body.gadget_type;
        if (req.body.gadget_price) toUpdate.gadget_price = req.body.gadget_price;
        if (req.body.gadget_version) toUpdate.gadget_version = req.body.gadget_version;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};


// VIEWS
// Handle a show all view
exports.gadgets_view_all_Page = async function (req, res) {
    try {
        theGadgets = await gadgets.find();
        res.render('gadgets', { title: 'gadgets Search Results', results: theGadgets });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle a show one view with id specified by query
exports.gadgets_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await gadgets.findById(req.query.id)
        res.render('gadgetsdetail',
            { title: 'gadgets Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a zoo.
// No body, no in path parameter, no query.
// Does not need to be async
exports.gadgets_create_Page =  function(req, res) {
    console.log("create view")
    try{
        res.render('gadgetscreate', { title: 'Gadgets Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a zoo.
// query provides the id
exports.gadgets_update_Page =  async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await gadgets.findById(req.query.id)
        res.render('gadgetsupdate', { title: 'Gadgets Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query
exports.gadgets_delete_Page = async function(req, res) {
    console.log("Delete view for id "  + req.query.id)
    try{
        result = await gadgets.findById(req.query.id)
        res.render('gadgetsdelete', { title: 'Gadgets Delete', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// VIEWS 
// Handle a show all view 
exports.costume_view_all_Page = async function(req, res) { 
    try{ 
        thegadgetss = await gadget.find(); 
        res.render('gadgetss', { title: 'Costume Search Results', results: thegadgetss }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 