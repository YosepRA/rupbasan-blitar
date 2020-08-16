const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.methods = {
  checkPassword: function (inputPassword) {
    return bcrypt.compare(inputPassword, this.password);
  },
  hashPassword: function (inputPassword) {
    return bcrypt.hash(inputPassword, 10);
  },
};

userSchema.pre('save', async function () {
  let hashed = await this.hashPassword(this.password);
  this.password = hashed;
});

module.exports = mongoose.model('User', userSchema);
