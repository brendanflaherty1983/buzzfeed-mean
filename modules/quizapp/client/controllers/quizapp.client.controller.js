'use strict';

// Create the 'quizapp' controller
angular.module('quizapp').controller('QuizAppController', ['$scope', '$http', '$location', '$window', 'Authentication',
  function ($scope, $http, $location, $window, Authentication) {
    // If user is not signed in then redirect back home
    if (!Authentication.user) {
      $location.path('/');
    }
  }
]).directive('quiz', function($http, $window, Authentication, quizFactory) {
  return {
    restrict: 'AE',
    scope: {},
    templateUrl: 'modules/quizapp/client/views/template.html',
    link: function(scope, elem, attrs) {
      scope.start = function() {
        scope.id = 0;
        scope.quizOver = false;
        scope.inProgress = true;
        scope.getQuestion();
      };

      scope.reset = function() {
        scope.inProgress = false;
        scope.score = 0;
      };

      scope.getQuestion = function() {
        var q = quizFactory.getQuestion(scope.id);
        if(q) {
          scope.question = q.question;
          scope.options = q.options;
          scope.answer = q.answer;
          scope.selectedOption = q.selected;
          scope.answerMode = true;
        } else {
          scope.quizOver = true;
          scope.sendMail(Authentication.user);
        }
      };

      scope.setSelection = function(option) {
        scope.selectedOption = option;
      };

      scope.checkAnswer = function() {
        if(scope.selectedOption === -1) return;
		
        if(scope.selectedOption === scope.options[scope.answer]) {
          scope.score++;
          scope.correctAns = true;
        } else {
          scope.correctAns = false;
        }

        scope.answerMode = false;
      };

      scope.nextQuestion = function() {
        scope.id++;
        scope.getQuestion();
      };

      scope.reset();
      
      scope.sendMail = function (user) {
        var data = ({ user: user });
 
        // Simple POST request example (passing data) :
        $http.post('/api/quizapp/sendemail', data)
          .success(function(data, status, headers, config) {
            // this callback will be called asynchronously when the response is available
          })
          .error(function(data, status, headers, config) {
            // called asynchronously if an error occurs or server returns response with an error status.
          }); 
      };
    }
  };
}).factory('quizFactory', function() {
  var questions = [
    {
      question: 'Which is the largest country in the world by population?',
      options: ['India', 'USA', 'China', 'Russia'],
      answer: 2,
      selected: -1
    },
    {
      question: 'When did the second world war end?',
      options: ['1945', '1939', '1944', '1942'],
      answer: 0,
      selected: -1
    },
    {
      question: 'Which was the first country to issue paper currency?',
      options: ['USA', 'France', 'Italy', 'China'],
      answer: 3,
      selected: -1
    },
    {
      question: 'Which city hosted the 1996 Summer Olympics?',
      options: ['Atlanta', 'Sydney', 'Athens', 'Beijing'],
      answer: 0,
      selected: -1
    },
    {	
      question: 'Who invented the telephone?',
      options: ['Albert Einstein', 'Alexander Graham Bell', 'Isaac Newton', 'Marie Curie'],
      answer: 1,
      selected: -1
    }
  ];

  return {
    getQuestion: function(id) {
      if(id < questions.length) {
        return questions[id];
      } else {
        return false;
      }
    }
  };
});