module.exports = {
  app: {
    options: {
      paths: [ '<%= paths.client %>/css' ]
    },
    files: {
      '<%= paths.server %>/static/app.css': '<%= paths.client %>/css/app.less'
    }
  }
};
