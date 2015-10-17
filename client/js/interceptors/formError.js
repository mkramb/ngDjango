'use strict';

angular.module('app.interceptors.form', [])
  .service('FormErrorIntr',[
    '$q', '$rootScope',
    function($q, $rootScope) {
      return {
        responseError: function (response) {
          if (response.status === 400) {
            $rootScope.$broadcast('FORM_ERROR',
              (response.data.non_field_errors) ?
                _.first(response.data.non_field_errors) : null
            );
          }

          return $q.reject(response);
        }
      };
    }
  ]);
