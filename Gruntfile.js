'use strict';

module.exports = (grunt) => {
    const configs = require('./grunt/configs.js')(grunt);
    grunt.config.init(configs);
    grunt.registerTask('default', () => {
        grunt.log.errorlns('No task selected');
        grunt.log.writeln('>> grunt build'.yellow);
        grunt.log.writeln('>> grunt dev'.yellow);
        grunt.log.writeln('>> grunt watch'.yellow);
    });
};
