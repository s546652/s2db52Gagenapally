var express = require('express');
const detail_controllers= require('../controllers/detail');
var router = express.Router();
/* GET house */
router.get('/', detail_controllers.house_view_one_Page );
module.exports = router;