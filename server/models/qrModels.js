const mongoose = require('mongoose');

const userDataSchema = new mongoose.Schema({
  qrId: {
    type: Number,
    unique: true,
  },
  mobile: {
    type: String,
    required: [true, 'Response must have the mobile number'],
  },
  message: {
    type: String,
    required: [true, 'A QR Code must have a message'],
  },
});

const UserData = mongoose.model('UserData', userDataSchema);

module.exports = UserData;
