'use strict';

angular.module('app.controllers.home', ['ui.router'])
  .config([
    '$stateProvider',
    function($stateProvider)
    {
      $stateProvider.state('home', {
        url: '/',
        controller: 'HomeCtrl',
        templateProvider: function() {
          return require('./../../tpl/home.html');
        },
        data: {
          requiresLogin: true
        }
      });
    }
  ])
  .controller('HomeCtrl', [
    '$scope', 'UserSrv',
    function($scope, UserSrv)
    {
      $scope.users = [];

      UserSrv.getAll().then(function(data) {
        $scope.users = data;
      })
    }
  ]);
