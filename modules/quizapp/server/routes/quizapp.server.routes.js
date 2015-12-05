'use strict';

module.exports = function (app) {
  // User Routes
  var quizapp = require('../controllers/quizapp.server.controller');

  // Setting up the quizapp api
  app.route('/api/quizapp/sendemail').post(quizapp.sendemail);
};
