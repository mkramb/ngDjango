module.exports = {
  fonts: {
    expand: true,
    flatten: true,
    src: [ '<%= paths.client %>/lib/bootstrap/dist/fonts/*' ],
    dest: '<%= paths.server %>/static/fonts'
  }
};
