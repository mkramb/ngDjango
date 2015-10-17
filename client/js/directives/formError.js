'use strict';

angular.module('app.directives.form', [])
  .directive('formError', [
    function() {
      return {
        restrict: 'A',
        scope: {},
        template: require('./../../tpl/error.html'),
        link: function(scope, element, attrs) {
          scope.$on('FORM_ERROR', function(event, message) {
            scope.message = message;
          });
        }
      };
    }
  ]);
