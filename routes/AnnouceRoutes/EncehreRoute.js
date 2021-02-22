const router = require("express").Router();
const EnchereController = require("../../Controllers/AnnounceControllers/EnchereController");


router.post('/add/:UserID/:SubcategID',EnchereController.addEnchere)
router.get('/',EnchereController.getAll)
router.post('/update/:id',EnchereController.UpDatedEnchere)

module.exports = router;
