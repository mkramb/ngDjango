module.exports = {
  js: {
    src: [
      '<%= paths.client %>/lib/jquery/dist/jquery.js',
      '<%= paths.client %>/lib/bootstrap/dist/js/bootstrap.js',
      '<%= paths.client %>/lib/lodash/lodash.js',
      '<%= paths.client %>/lib/angular/angular.js',
      '<%= paths.client %>/lib/angular-resource/angular-resource.js',
      '<%= paths.client %>/lib/angular-ui-router/release/angular-ui-router.js',
      '<%= paths.client %>/lib/a0-angular-storage/dist/angular-storage.js',
      '<%= paths.client %>/lib/angular-jwt/dist/angular-jwt.js'
    ],
    dest: '<%= paths.server %>/static/lib.js'
  },
  css: {
    src: [
      '<%= paths.client %>/lib/bootstrap/dist/css/bootstrap.css',
      '<%= paths.client %>/lib/bootstrap/dist/css/bootstrap-theme.css'
    ],
    dest: '<%= paths.server %>/static/lib.css'
  }
};
