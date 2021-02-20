const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const personne = require('./Personne.model');
const user = new Schema({
  point:{
      type:String,
      default:0
  },
   announces: [],
});

const User = personne.discriminator('User', user);
module.exports = User;
