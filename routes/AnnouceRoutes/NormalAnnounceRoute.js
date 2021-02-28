const router=require("express").Router();
const NormalAnnounceCont = require("../../Controllers/AnnounceControllers/NormalAnnounceController");
router.get('/',NormalAnnounceCont.getAll)
router.post('/add/:user/:subcategorie/:city',NormalAnnounceCont.addAnnounce)
router.post('/update/:id',NormalAnnounceCont.UpDatedNormalAnnounce)
module.exports = router;
