const Enchere= require('../../model/Announce/Enchere.model')
exports.addEnchere=async (req,res)=>{
    try{
        const {subject,details,city,phone,image,end_Date,initial_price}=req.body
        user = req.params.UserID;
        subcategorie = req.params.SubcategID;
        const enchere =new Enchere({
            subject,
            details,
            //city,
            //user,
            phone,
            image,
           // subcategorie,
            end_Date,
            initial_price
        })
        console.log(enchere)
        const savedEnchere=await enchere.save();
        res.status(200).json(savedEnchere)
    }catch(err){
        res.status(200).json({Error:err.message})
    }
}
exports.getAll=async (req,res)=>{
    try{
        const enchers=await Enchere.find();
        res.status(200).json(enchers)

    }catch(err){
        res.status(400).json({Error :err.message})
    }
}
exports.UpDatedEnchere = async (req, res) => {
    const { id } = req.params;
    const updatedAnnonce = req.body;
  
    try {
      const Rst = await Enchere.findByIdAndUpdate(
        id,
        { $set: updatedAnnonce },
        { new: true }
      );
      if (Rst) {
        await res
          .status(200)
          .json({ message: "Enchere updated!", updatedAnnonce });
      } else {
        throw new Error("EnchereID undefined !");
      }
    } catch (err) {
      res.status(400).json({ Error: err.message });
    }
  };