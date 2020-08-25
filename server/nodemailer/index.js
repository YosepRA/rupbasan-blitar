const nodemailer = require('nodemailer');

// Rupbasan Sendinblue.
const transportConfig = {
  host: process.env.SENDINBLUE_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.SENDINBLUE_USER,
    pass: process.env.SENDINBLUE_PASSWORD,
  },
};

module.exports = {
  transporter: nodemailer.createTransport(transportConfig),
};
