module.exports = function (grunt) {

  // configure
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      client: [
        'Gruntfile.js'
      ]
    },

    browserify: {
      options: {
        transform: [ [ require('grunt-react').browserify, { harmony: true } ] ]
      },
      client: {
        src: ['app/**/*.jsx'],
        dest: 'web/js/app.js'
      }
    },

    watch: {
      react: {
        files: 'app/**',
        tasks: ['browserify']
      }
    }
  });

  // load
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');

  // register
  grunt.registerTask('default', ['jshint', 'browserify']);
};