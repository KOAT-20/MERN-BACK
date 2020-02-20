const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new Schema ({
  username: {type: String, required: true, trim: true, unique: true},
  lastname: {type: String, required: true, trim: true},
  password: {type: String, required: true}
}, {timestamps: true});

userSchema.methods.passEncrypt = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

userSchema.methods.passDesencrypt = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = model('User', userSchema);
