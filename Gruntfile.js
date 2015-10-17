module.exports = function(grunt) {
  'use strict';

  var config = require('./tasks')(grunt);

  config.pkg = grunt.file.readJSON('./package.json');
  config.paths = {
    client: [__dirname, 'client'].join('/'),
    server: [__dirname, 'server'].join('/')
  };

  grunt.initConfig(config);

  Object.keys(config.pkg.devDependencies).forEach(function(item) {
    if (item.lastIndexOf('grunt-', 0) === 0) {
      grunt.loadNpmTasks(item);
    }
  });

  grunt.registerTask('default', [ 'availabletasks' ]);
  grunt.registerTask('build', [
    'clean',
    'copy:fonts',
    'concat:js',
    'concat:css',
    'browserify:app',
    'less:app'
  ]);
};
