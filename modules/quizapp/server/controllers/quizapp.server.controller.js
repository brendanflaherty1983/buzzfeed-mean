'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash'),
  nodemailer = require('nodemailer'),
  mongoose = require('mongoose'),
  User = mongoose.model('User');

var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'buzzfeedmean@gmail.com',
    pass: 'c8QUc8uh'
  }
});
  
/**
 * Send quiz email
 */
exports.sendemail = function (req, res) {
  // Init Variables
  var user = req.user;
  
  var mailOptions = {
    from: 'buzzfeedmean@gmail.com',
    to: user.email,
    subject: 'Hello ' + user.firstName + ' ' + user.lastName,
    html: '<b>Thank you for taking our quiz!</b>' // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Message sent: ' + info.response);
    }
  });
};
