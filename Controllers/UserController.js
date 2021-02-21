const User = require("../model/personne/User.model");
const personnne=require("../model/personne/personne.model");
const bcrypt = require("bcryptjs");


exports.getAllUsers = async (req, res) => {
  try {
    const Users = await User.find();
    res.status(200).json({ Users });
  } catch (err) {
    res.status(400).json({ err });
  }
};

exports.signup = async (req, res, next) => {
  try {
    
    const {
      firstname,
      lastname,
      phone,
      image,
      email,
      password,
      point,
      announces,
    } = req.body;
    const userDoc = await User.findOne({ email: email });
    if (userDoc) {
      return res.status(404).json({ message: "email déja existe" });
    }
    const hashedpw = await bcrypt.hash(password, 12);
    if (hashedpw) {
      const user = new User({
        firstname: firstname,
        lastname: lastname,
        phone: Number(phone),
        image: image,
        email: email,
        password: hashedpw,
        grade: "user",
        point: point,
        announces: announces,
      });
      const addedUser = await user.save();

      res.status(200).json({ message: "User created", userId: addedUser._id });
    } else {
      return res.status(400).json({ message: "mot de passe pas hashé" });
    }
  } catch (err) {
    return res.status(400).json({ error: err.message });
    console.log(err.message)
  }
};

exports.deleteUser = async (req, res) => {
  const userId = req.params.id;
  try {
    
   const userdel= await personnne.findByIdAndDelete(userId);
   if(userdel)
    res.status(200).json({ message: "user deleted." });
    else{
      return res.status(401).json({message:`user with id ${userid} not existe `})
    }
  } catch (err) {
    
    res.status(400).json(err.message);
  }
};