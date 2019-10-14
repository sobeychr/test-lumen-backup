'use strict';

module.exports = (grunt) => {
    const gruntTasks = grunt.config.get('gruntTasks');
    const readTask = grunt.config.get('readTask');
    const newName = grunt.option('name');

    grunt.registerTask('addpage', () => {
        if(newName) {
            grunt.log.writeln('adding new webpage'.yellow, newName);
            grunt.task.run(['copy:template']);
        }
        else {
            grunt.log.errorlns('Unable to add webpage');
            readTask(gruntTasks.add);
        }
    });
};
