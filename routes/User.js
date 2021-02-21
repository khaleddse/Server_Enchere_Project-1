const router=require('express').Router();
const UserController=require('../Controllers/UserController');

router.post("/add",UserController.signup);

module.exports = router;