'use strict';

angular.module('app.controllers.user.logout', ['ui.router'])
  .config([
    '$stateProvider',
    function($stateProvider)
    {
      $stateProvider.state('logout', {
        url: '/logout',
        controller: 'LogoutCtrl'
      });
    }
  ])
  .controller('LogoutCtrl', [
    '$state', 'AuthSrv',
    function($state, AuthSrv)
    {
      AuthSrv.clear();
      $state.go('login');
    }
  ]);
