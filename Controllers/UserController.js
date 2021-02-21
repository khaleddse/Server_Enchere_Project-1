const User = require("../model/personne/User.model");
const bcrypt = require("bcryptjs");

exports.signup = async (req, res, next) => {
  try {
    //const errors = validationResult(req);
    /* if (!errors.isEmpty()) {
        const error = new Error("Validation failed.");
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
      }*/
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
