const router = require("express").Router();
const AdminController=require('../Controllers/AdminController');

router.post('/add',AdminController.addAdmin);
module.exports = router;