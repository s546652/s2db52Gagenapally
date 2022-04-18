var house = require('../models/house');

exports.house_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await house.findById( req.query.id) 
        res.render('housedetail',  
{ title: 'House Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    }
}; 