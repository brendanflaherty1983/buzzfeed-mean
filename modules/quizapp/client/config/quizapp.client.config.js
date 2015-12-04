'use strict';

// Configuring the Chat module
angular.module('quizapp').run(['Menus',
  function (Menus) {
    // Set top bar menu items
    Menus.addMenuItem('topbar', {
      title: 'Quiz',
      state: 'quiz'
    });
  }
]);
