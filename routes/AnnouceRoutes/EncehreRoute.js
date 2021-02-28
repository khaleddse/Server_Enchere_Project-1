const router = require("express").Router();
const EnchereController = require("../../Controllers/AnnounceControllers/EnchereController");


router.post('/add/:user/:subcategorie/:city',EnchereController.addEnchere)
router.get('/',EnchereController.getAll)
router.post('/update/:id',EnchereController.UpDatedEnchere)

module.exports = router;
