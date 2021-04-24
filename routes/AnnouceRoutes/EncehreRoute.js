const router = require("express").Router();
const EnchereController = require("../../Controllers/AnnounceControllers/EnchereController");
const {isAuth}=require('../../middleware/auth');
const {upload}=require('../ImageService')
router.post('/add/:subcategorie/:city/:user',upload.single('image'),EnchereController.addEnchere)
router.get('/',EnchereController.getAll)
router.post('/update/:id',EnchereController.UpDatedEnchere)

module.exports = router;
