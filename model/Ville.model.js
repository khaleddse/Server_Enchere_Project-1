const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ville = new Schema({
  nom: { type: String, require: true },
});

const Ville = mongoose.model("Ville", ville);
module.exports = Ville;
