const router=require("express").Router();
const DrawController = require("../../Controllers/AnnounceControllers/DrawController");
router.get('/',DrawController.getAll)
router.post('/add/:user/:subcategorie/:city',DrawController.addDraw)
router.post('/update/:id',DrawController.UpDatedDraw)
module.exports = router;
