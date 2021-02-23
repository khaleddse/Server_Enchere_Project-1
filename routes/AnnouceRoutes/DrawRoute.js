const router=require("express").Router();
const DrawController = require("../../Controllers/AnnounceControllers/DrawController");
router.get('/',DrawController.getAll)
router.post('/add/:UserID/:SubcategID',DrawController.addDraw)
router.post('/update/:id',DrawController.UpDatedDraw)
module.exports = router;
