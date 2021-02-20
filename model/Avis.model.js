const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const avis = new Schema({
  email: { type: String, require: true },
  detail: { type: String, require: true },
});

const Avis = mongoose.model("Avis", avis);
module.exports = Avis;
