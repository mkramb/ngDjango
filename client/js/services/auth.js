'use strict';

angular.module('app.services.auth', ['ngResource'])
  .service('AuthSrv', [
    '$q', '$resource', 'AppConfig', 'store',
    function ($q, $resource, AppConfig, store) {
      var Auth = $resource(AppConfig.Api + 'auth/');

      this.save = function(data) {
        var deferred = $q.defer();

        return Auth.save(data).$promise.then(function(data) {
          store.set('jwt', data.token);
          deferred.resolve(data.token);
        }, deferred.reject);

        return deferred.promise;
      };

      this.clear = function() {
        store.remove('jwt');
      }
    }
  ]);
