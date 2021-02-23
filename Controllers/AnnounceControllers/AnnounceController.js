const Announce = require("../../model/Announce/Announce.model")

exports.getAllAnnoucements=async (req,res) =>{
    try{
        const announces= await Announce.find();
        res.status(200).json(announces)
    }catch(err){
        res.status(400).json({Error:err.message})
    }
}

exports.deleteAnnounce =async (req,res)=>{
    try{
        const rst=await Announce.findByIdAndDelete(req.params.id)
        if(rst)
        res.status(200).json("Annouce deleted!")
        else throw new Error('ID not found')
    }catch(err){
        res.status(400).json({Error :err.message})
    }
}   
exports.SearchByID = async (req, res) => {
    try {
      const announce = await Announce.findById(req.params.id);
      res.status(200).json({ announce });
    } catch (err) {
      res.status(400).json(err);
    }
  };
  exports.UpDatedAnnounce = async (req, res) => {
    const { id } = req.params;
    const updatedAnnonce = req.body;
  
    try {
      const Rst = await Announce.findByIdAndUpdate(
        id,
        { $set: updatedAnnonce },
        { new: true }
      );
      if (Rst) {
        await res
          .status(200)
          .json({ message: "Annonce updated!", updatedAnnonce });
      } else {
        throw new Error("announceID undefined !");
      }
    } catch (err) {
      res.status(400).json({ Error: err.message });
    }
  };