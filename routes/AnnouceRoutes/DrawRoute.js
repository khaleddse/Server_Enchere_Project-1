const router=require("express").Router();
const DrawController = require("../../Controllers/AnnounceControllers/DrawController");
const {isAuth}=require('../../middleware/auth');
router.get('/',DrawController.getAll)
router.post('/add//:subcategorie/:city',isAuth,DrawController.addDraw)
router.post('/update/:id',DrawController.UpDatedDraw)
module.exports = router;
