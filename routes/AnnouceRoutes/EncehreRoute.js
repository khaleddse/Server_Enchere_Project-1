const router = require("express").Router();
const EnchereController = require("../../Controllers/AnnounceControllers/EnchereController");
const {isAuth}=require('../../middleware/auth');

router.post('/add/:subcategorie/:city',isAuth,EnchereController.addEnchere)
router.get('/',EnchereController.getAll)
router.post('/update/:id',EnchereController.UpDatedEnchere)

module.exports = router;
