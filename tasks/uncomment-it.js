'use strict';
var chalk = require('chalk');
var extname = require('path').extname;
var uncommentIt = require('uncomment-it');

module.exports = function(grunt) {
  grunt.registerMultiTask('uncommentIt', 'Uncomment html, js or css', function() {
    var files = this.files;
    var opts = this.options();

    files.forEach(function(file) {
      var fileSrc = file.src;
      var type = opts.type;

      if (fileSrc.length > 1) {
        grunt.log.warn('Only one src per dest is supported. The first file is used');
      }

      var src = fileSrc[0];
      var dest = file.dest || src;
      type = type || extname(src).replace('.', '');

      var data = grunt.file.read(src);
      var result = uncommentIt(data, type);

      var uncommentedCount = result.comments.length;

      if (uncommentedCount > 0) {
        result.comments.forEach(function(comment) {
          grunt.verbose.writeln(chalk.green(comment) + chalk.cyan('uncommented'));
        });

        grunt.verbose.writeln(dest + ': ' + chalk.green('✔ ') + uncommentedCount + ' comments uncommented.');
      }

      grunt.file.write(dest, result.data);
    });

    var tally = files.length;
    grunt.log.write('Processed ' + chalk.cyan(tally) + (tally === 1 ? ' file' : ' files'));
    grunt.log.writeln();
  });
};
