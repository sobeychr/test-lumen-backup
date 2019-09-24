'use strict';

module.exports = (grunt) => {
    grunt.registerTask('dev', () => {
        grunt.log.writeln('running dev environment'.yellow);
        grunt.task.run(['build', 'watch']);
    });
};
