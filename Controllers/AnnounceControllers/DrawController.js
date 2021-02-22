const Draw=require('../../model/Announce/Draw.model')
exports.addDraw=async (req,res)=>{
    try{
        const {subject,details,city,phone,image,max_participants_number,participation_price}=req.body
        user = req.params.UserID;
        subcategorie = req.params.SubcategID;
        const draw =new Draw({
            subject,
            details,
            //city,
            //user,
            phone,
            image,
           // subcategorie,
            max_participants_number,
            participation_price
        })
        const saved=await draw.save();
        res.status(200).json(saved)
    }catch(err){
        res.status(200).json({Error:err.message})
    }
}
exports.getAll=async (req,res)=>{
    try{
        const draws=await Draw.find();
        res.status(200).json(draws)

    }catch(err){
        res.status(400).json({Error :err.message})
    }
}
exports.UpDatedDraw = async (req, res) => {
    const { id } = req.params;
    const updatedAnnonce = req.body;
  
    try {
      const Rst = await Draw.findByIdAndUpdate(
        id,
        { $set: updatedAnnonce },
        { new: true }
      );
      if (Rst) {
        await res
          .status(200)
          .json({ message: "Draw updated!", updatedAnnonce });
      } else {
        throw new Error("DrawID undefined !");
      }
    } catch (err) {
      res.status(400).json({ Error: err.message });
    }
  };