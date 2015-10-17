'use strict';

angular.module('app.controllers.user.login', ['ui.router'])
  .config([
    '$stateProvider',
    function($stateProvider)
    {
      $stateProvider.state('login', {
        url: '/login',
        controller: 'LoginCtrl',
        templateProvider: function() {
          return require('./../../tpl/user.login.html');
        }
      });
    }
  ])
  .controller('LoginCtrl', [
    '$scope', '$state', 'AuthSrv',
    function($scope, $state, AuthSrv)
    {
      $scope.form = {};

      $scope.submitForm = function(isValid) {
        if (isValid) {
          AuthSrv.save($scope.form).then(function() {
            $state.go('home');
          });
        }
      };
    }
  ]);
