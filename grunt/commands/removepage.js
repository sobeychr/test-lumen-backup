'use strict';

module.exports = (grunt) => {
    const readTask = grunt.config.get('readTask');
    const newName = grunt.option('name');

    grunt.registerTask('removepage', () => {
        if(newName) {
            grunt.log.writeln('deleting webpage'.yellow, newName);
            grunt.task.run(['clean:template']);
        }
        else {
            grunt.log.errorlns('Unable to remove webpage');
            readTask('remove');
        }
    });
};
