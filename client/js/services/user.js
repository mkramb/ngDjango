'use strict';

angular.module('app.services.user', ['ngResource'])
  .service('UserSrv', [
    '$resource', 'AppConfig',
    function($resource, AppConfig) {
      var Users = $resource(AppConfig.Api + 'users/');

      this.register = function(data) {
        return Users.save(data).$promise;
      };

      this.getAll = function() {
        return Users.query().$promise;
      }
    }
  ]);
