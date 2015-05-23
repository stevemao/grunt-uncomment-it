'use strict';
module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'tasks/**/*.js',
        '<%= nodeunit.tests %>'
      ]
    },

    jscs: {
      options: {
        config: '.jscsrc'
      },
      all: [
        'Gruntfile.js',
        'tasks/**/*.js',
        '<%= nodeunit.tests %>'
      ]
    },

    copy: {
      overwrite: {
        expand: true,
        cwd: 'test/fixtures',
        src: '*',
        dest: 'tmp/overwrite'
      }
    },

    uncommentIt: {
      overwrite: {
        expand: true,
        src: 'tmp/overwrite/*'
      },
      target: {
        expand: true,
        cwd: 'test/fixtures',
        src: '*',
        dest: 'tmp'
      }
    },

    nodeunit: {
      tests: 'test/*.js'
    },

    clean: {
      all: {
        src: 'tmp'
      }
    }
  });

  grunt.loadTasks('tasks');
  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', [
    'jshint',
    'jscs',
    'copy',
    'uncommentIt',
    'nodeunit',
    'clean'
  ]);
};
