var house = require('../models/house');

// List of all house
exports.house_list = async function(req, res) {
    try{
    thehouse = await house.find();
    res.send(thehouse);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

//exports house_list = function(req, res) {
 //res.send('NOT IMPLEMENTED: house list');
//};
// for a specific house.
exports.house_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: house detail: ' + req.params.id);
};
// Handle house create on POST.
// Handle Costume create on POST.
exports.house_create_post = async function(req, res) {
    console.log(req.body)
    let document = new house();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.flavour = req.body.flavour;
    document.quantity = req.body.quantity;
    document.cost = req.body.cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// Handle house delete form on DELETE.
exports.house_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: house delete DELETE ' + req.params.id);
};
// Handle house update form on PUT.
exports.house_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: house update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.house_view_all_Page = async function(req, res) {
    try{
    thehouse = await house.find();
    res.render('house', { title: 'house Search Results', results: thehouse });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };