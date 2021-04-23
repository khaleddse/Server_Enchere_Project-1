const router=require("express").Router();
const {isAuth}=require('../../middleware/auth');

const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null,   Date.now() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});








const NormalAnnounceCont = require("../../Controllers/AnnounceControllers/NormalAnnounceController");
router.get('/',NormalAnnounceCont.getAll)
router.post('/add/:user/:subcategorie/:city',upload.single('image'),NormalAnnounceCont.addAnnounce)
router.post('/update/:id',NormalAnnounceCont.UpDatedNormalAnnounce)
module.exports = router;
