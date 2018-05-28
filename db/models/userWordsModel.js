const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  text: String,
  fromLang: String,
  toLang: String
});

const User = mongoose.model('User', userSchema);

module.exports.User = User;
