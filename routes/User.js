const router=require('express').Router();
const UserController=require('../Controllers/UserController');

router.get("/",UserController.getAllUsers);
router.post("/add",UserController.signup);
router.delete("/:id",UserController.deleteUser)

module.exports = router;