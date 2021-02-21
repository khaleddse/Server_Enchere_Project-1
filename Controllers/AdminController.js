const Admin = require("../model/personne/Admin.model");
const bcrypt = require("bcryptjs");

exports.addAdmin = async (req, res) => {
  const {
    firstname,
    lastname,
    phone,
    image,
    email,
    password,
    grade,
  } = req.body;
  const hashedpw = await bcrypt.hash(password, 12);
  try {
    if (hashedpw) {
      const newadmin = new Admin({
        firstname,
        lastname,
        phone: Number(phone),
        image,
        email,
        password: hashedpw,
        grade,
      });

      const admin = await newadmin.save();
      if (!admin) {
        throw new Error("cannot add admin !");
      }
      res.status(200).json({ message: "Admin added", admin });
    }
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
};
