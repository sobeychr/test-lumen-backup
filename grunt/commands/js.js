'use strict';

module.exports = (grunt) => {
    grunt.registerTask('js', () => {
        grunt.log.writeln('building js files'.yellow);
        grunt.task.run(['browserify', 'exorcise']);
    });
};
