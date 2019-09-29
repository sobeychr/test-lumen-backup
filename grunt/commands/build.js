'use strict';

module.exports = (grunt) => {
    grunt.registerTask('build', () => {
        grunt.log.writeln('building default assets'.yellow);
        grunt.task.run(['copy', 'sass', 'js']);
    });
};
