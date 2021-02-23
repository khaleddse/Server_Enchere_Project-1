const router=require("express").Router();
const NormalAnnounceCont = require("../../Controllers/AnnounceControllers/NormalAnnounceController");
router.get('/',NormalAnnounceCont.getAll)
router.post('/add/:UserID/:SubcategID',NormalAnnounceCont.addAnnounce)
module.exports = router;
