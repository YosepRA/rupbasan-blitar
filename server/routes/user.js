const express = require('express');
const router = express.Router();
const passport = require('../passport');
const { transporter } = require('../nodemailer');
const User = require('../models/User');
const { generateRandomID } = require('../helpers');

router.get('/', async (req, res) => {
  try {
    if (req.isAuthenticated()) {
      return res.json({
        isAuthenticated: true,
        username: req.user.username,
      });
    }
    res.json({ isAuthenticated: false });
  } catch (err) {
    res.status(500).send('Internal server error');
  }
});

router.post('/register', async (req, res) => {
  try {
    let newUser = await User.create(req.body);

    res.json({ success: true, username: newUser.username });
  } catch (err) {
    if (err.code === 11000)
      res.json({
        success: false,
        message: 'Username atau email sudah terdaftar.',
      });
  }
});

router.post('/login', function (req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    if (err) return res.json(err);

    if (!user) return res.status(401).json({ ...info, success: false });

    req.login(user, function (err) {
      if (err) return next(err);
      return res.json({
        success: true,
        username: user.username,
      });
    });
  })(req, res, next);
});

router.get('/logout', async (req, res) => {
  req.logout();
  res.json({ success: true, message: 'Berhasil Logout' });
});

// Change password.
router.post('/change/:username', async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    let user = await User.findOne({ username: req.params.username });
    if (!(await user.checkPassword(oldPassword))) {
      return res.json({
        success: false,
        message: 'Password lama salah',
      });
    }

    user.password = newPassword;
    await user.save();

    res.json({ success: true, message: 'Password berhasil diganti.' });
  } catch (err) {
    console.error(`${req.method}: ${req.path}`, err);
    res.status(500).send('Internal server error');
  }
});

// Reset password.
router.post('/reset', async (req, res) => {
  try {
    const { resetEmail } = req.body;
    let user = await User.findOne({ email: resetEmail });
    // It has to be an email that is registered to the user database.
    if (!user)
      return res.json({ success: false, message: 'Email tidak terdaftar.' });
    // If there is, then change it to a generated random password and send it to the email.
    let randomPassword = await generateRandomID(5);

    // Change user's password.
    user.password = randomPassword;
    await user.save();

    let email = await transporter.sendMail({
      from: 'rupbasan.blitar@yahoo.com',
      to: resetEmail,
      subject: 'Reset password akun Rupbasan Blitar',
      text: `Password untuk akun anda telah berhasil di-reset.
      Berikut adalah password baru untuk akun anda:

      ${randomPassword}
      
      Tolong ganti password secepatnya setelah masuk ke akun anda. Terima kasih.`,
    });

    res.json({
      success: true,
      message: `Password baru telah dikirim ke email: ${resetEmail}`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
