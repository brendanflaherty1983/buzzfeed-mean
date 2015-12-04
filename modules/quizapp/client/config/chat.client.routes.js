'use strict';

// Configure the 'chat' module routes
angular.module('quizapp').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('quiz', {
        url: '/quiz',
        templateUrl: 'modules/quizapp/client/views/quizapp.client.view.html',
        data: {
          roles: ['user', 'admin']
        }
      });
  }
]);
