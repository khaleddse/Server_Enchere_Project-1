const router = require("express").Router();
const AdminController = require("../Controllers/AdminController");
const { isAuth } = require("../middleware/auth");

router.get('/',AdminController.getAllAdmins);
router.post("/add", AdminController.addAdmin);
router.put("/update", isAuth, AdminController.UpDateAdmin);
router.delete("/delte/:id", AdminController.delteAdmin);
router.get("/:id", AdminController.findById);
module.exports = router;
