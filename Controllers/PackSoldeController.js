const Pack=require('../model/PackSolde.model');

exports.addPack=async(req,res)=>{
   try{
    const {price,qtepoints}=req.body;
    const newpack=new Pack({
        price:price,
        qtepoints:qtepoints
    })
    const pack= await newpack.save();
    if(!pack){
        throw new Error("cannot added packsold ")
    }
    return res.status(200).json({message:"Pack solde added ", pack:pack})

   } catch(err){
    res.status(400).json({ Error: err.message });
   }


}