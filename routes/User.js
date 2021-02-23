const router = require("express").Router();
const UserController = require("../Controllers/UserController");
const { isAuth } = require("../middleware/auth");

router.get("/", UserController.getAllUsers);
router.post("/add", UserController.signup);
router.get("/:id", UserController.FindUserById);
router.put("/update", isAuth,UserController.UpDateUser);
router.delete("/:id", UserController.deleteUser);

module.exports = router;
