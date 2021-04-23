const Enchere = require("../../model/Announce/Enchere.model");
const City = require("../../model/City.model");
const Subcateg = require("../../model/Subcategs.model");
const User = require("../../model/personne/User.model");

exports.addEnchere = async (req, res) => {
  try {
    const {
      subject,
      details,
      phone,
      image,
      end_Date,
      initial_price,
    } = req.body;
    const { userId } = req.personData;
    const { city,subcategorie } = req.params;
    await City.findById(city);
    await User.findById(userId);
    await Subcateg.findById(subcategorie);
    const enchere = new Enchere({
      subject,
      details,
      city,
      user:userId,
      phone,
      image,
      subcategorie,
      end_Date,
      initial_price,
    });
    const saved = await enchere.save();
    await Subcateg.findByIdAndUpdate(subcategorie, {
      $push: { announces: saved._id },
    });
    await User.findByIdAndUpdate(userId, {
      $push: { announces: saved._id },
    });
    res.status(200).json(saved);
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
};
exports.getAll = async (req, res) => {
  try {
    const enchers = await Enchere.find();
    res.status(200).json(enchers);
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
};
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
