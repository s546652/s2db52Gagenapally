var express = require('express');
const house_controlers= require('../controllers/house');
var router = express.Router();
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  }
/* GET house */
router.get('/', house_controlers.house_view_all_Page );
module.exports = router;

/* GET detail house page */
router.get('/detail', house_controlers.house_view_one_Page);

/* GET create house page */
router.get('/create', secured, house_controlers.house_create_Page);

/* GET create update page */
router.get('/update', secured, house_controlers.house_update_Page);

/* GET delete house page */
router.get('/delete', secured, house_controlers.house_delete_Page);



/* GET update house page */ 
router.get('/update', house_controlers.house_update_Page); 