module.exports = {
  scripts: {
    files: [
      '<%= paths.client %>/**/*',
      '<%= paths.client %>/**'
    ],
    tasks: [ 'build' ],
    options: {
      livereload: true,
      spawn: false
    }
  }
};
