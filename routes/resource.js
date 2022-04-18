var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var house_controller = require('../controllers/house');
var detail_controlers = require('../controllers/detail');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// house ROUTES ///
// POST request for creating a house.
router.post('/house', house_controller.house_create_post);
// DELETE request to delete house.
router.delete('/house/:id', house_controller.house_delete);
// PUT request to update house.
router.put('/house/:id',house_controller.house_update_put);
// GET request for one house.
router.get('/house/:id', house_controller.house_detail);
// GET request for list of all house items.
router.get('/house', house_controller.house_list);
/* GET detail costume page */ 
router.get('/detail', detail_controlers.house_view_one_Page);
module.exports = router;