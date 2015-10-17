module.exports = {
  app: {
    src: '<%= paths.client %>/js/app.js',
    dest: '<%= paths.server %>/static/app.js',
    options: {
      transform: ['stringify']
    }
  }
};
