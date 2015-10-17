'use strict';

angular.module('app.controllers.user.register', ['ui.router'])
  .config([
    '$stateProvider',
    function($stateProvider)
    {
      $stateProvider.state('register', {
        url: '/register',
        controller: 'RegisterCtrl',
        templateProvider: function() {
          return require('./../../tpl/user.register.html');
        }
      });
    }
  ])
  .controller('RegisterCtrl', [
    '$scope', '$state', 'UserSrv',
    function($scope, $state, UserSrv)
    {
      $scope.form = {};

      $scope.submitForm = function(isValid) {
        if (isValid) {
          UserSrv.register($scope.form).then(function() {
            $state.go('home');
          })
        }
      };
    }
  ]);
