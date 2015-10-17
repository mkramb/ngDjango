'use strict';

require('./controllers/home');
require('./controllers/userLogin');
require('./controllers/userLogout')
require('./controllers/userRegister');
require('./interceptors/formError');
require('./directives/formError');
require('./services/auth');
require('./services/user');

angular.module('app', [
  'app.controllers.home',
  'app.controllers.user.register',
  'app.controllers.user.logout',
  'app.controllers.user.login',
  'app.interceptors.form',
  'app.directives.form',
  'app.services.auth',
  'app.services.user',
  'angular-storage',
  'angular-jwt'
])
.constant('AppConfig', {
  Api: '/api/',
})
.config(['$urlRouterProvider', '$httpProvider', '$resourceProvider', 'jwtInterceptorProvider',
  function($urlRouterProvider, $httpProvider, $resourceProvider, jwtInterceptorProvider)
  {
    $urlRouterProvider.otherwise('/');
    $resourceProvider.defaults.stripTrailingSlashes = false;

    jwtInterceptorProvider.authPrefix = 'JWT ';
    jwtInterceptorProvider.tokenGetter = function(store) {
      return store.get('jwt');
    };

    $httpProvider.interceptors.push('jwtInterceptor');
    $httpProvider.interceptors.push('FormErrorIntr');
  }
])
.run(['$rootScope', '$state', 'store',
  function($rootScope, $state, store)
  {
    $rootScope.$on('$stateChangeStart', function(event, to) {
      if (to.data && to.data.requiresLogin) {
        if (!store.get('jwt')) {
          event.preventDefault();
          $state.go('login');
        }
      }
    });
  }
]);
