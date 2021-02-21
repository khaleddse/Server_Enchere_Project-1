const router=require("express").Router();
const PackController=require('../Controllers/PackSoldeController');

router.post('/add',PackController.addPack);

module.exports=router;