var gadgets = require('../models/gadget');
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
    let document = new gadgets();
    document.Gadgets_Name = req.body.Gadgets_Name;
    document.Gadgets_Location = req.body.University_Location;
    document.Number_of_Courses_Offered = req.body.Number_of_Courses_Offered;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
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
        if (req.body.Gadgets_Name) toUpdate.Gadgets_Name = req.body.Gadgets_Name;
        if (req.body.Gadgets_Location) toUpdate.Gadgets_Location = req.body.Gadgets_Location;
        if (req.body.Number_of_Courses_Offered) toUpdate.Number_of_Courses_Offered = req.body.Number_of_Courses_Offered;
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
        thezoos = await gadgets.find();
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
        result = await zoo.findById(req.query.id)
        res.render('gadgetsdelete', { title: 'Gadgets Delete', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};