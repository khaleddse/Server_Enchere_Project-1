const NormalAnnounce= require('../../model/Announce/NormalAnnounce.model')
exports.addAnnounce=async (req,res)=>{
    try{
        const {subject,details,city,phone,image,price}=req.body
        user = req.params.UserID;
        subcategorie = req.params.SubcategID;
        const annonce =new NormalAnnounce({
            subject,
            details,
            //city,
            //user,
            phone,
            image,
           // subcategorie,
            price
        })
        
        const saved=await annonce.save();
        res.status(200).json(saved)
    }catch(err){
        res.status(200).json({Error:err.message})
    }
}
exports.getAll=async (req,res)=>{
    try{
        const announces=await NormalAnnounce.find();
        res.status(200).json(announces)

    }catch(err){
        res.status(400).json({Error :err.message})
    }
}
exports.UpDatedNormalAnnounce = async (req, res) => {
    const { id } = req.params;
    const updatedAnnonce = req.body;
  
    try {
      const Rst = await NormalAnnounce.findByIdAndUpdate(
        id,
        { $set: updatedAnnonce },
        { new: true }
      );
      if (Rst) {
        await res
          .status(200)
          .json({ message: "Anounce updated!", updatedAnnonce });
      } else {
        throw new Error("AnounceID undefined !");
      }
    } catch (err) {
      res.status(400).json({ Error: err.message });
    }
  };