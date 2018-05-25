const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  user: String,
  words: Array,
});

module.exports.userSchema = userSchema;
