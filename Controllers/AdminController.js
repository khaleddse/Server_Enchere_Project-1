const Admin = require("../model/personne/Admin.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.status(200).json(admins);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
};
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
exports.findById = async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id);
    res.status(200).json(admin);
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
};
exports.delteAdmin = async (req, res) => {
  try {
    const admindel = await Admin.findOneAndDelete(req.params.id);
    console.log(admindel);
    if (admindel) res.status(200).json("admin deleted.");
    else {
      return res.status(400).json("admin not existe");
    }
  } catch (err) {
    res.status(400).json("Error: " + err.message);
  }
};
exports.UpDateAdmin = async (req, res) => {
  const { adminId } = req.personData;
  //const { firstname, lastname, phone, image, email, grade } = req.body;

  const updatedAdmin = req.body;
  try {
    const admin = await Admin.findByIdAndUpdate(
      adminId,
      { $set: updatedAdmin },
      { new: true }
    );
    const { _id, firstname, lastname, phone, image, email, grade } = admin;
    const payload = {
      adminId: _id,
      email,
      firstname,
      lastname,
      phone,
      image,
      grade,
    };
    const token = await jwt.sign(payload, "don2020!", {
      expiresIn: 3600,
    });
    res.status(200).json({
      message: "Admin updated!",
      token: "Bearer " + token,
    });
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
};
