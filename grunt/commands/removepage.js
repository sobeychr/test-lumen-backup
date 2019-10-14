'use strict';

module.exports = (grunt) => {
    const gruntTasks = grunt.config.get('gruntTasks');
    const readTask = grunt.config.get('readTask');
    const newName = grunt.option('name');

    if(newName) {
        grunt.option('force', true);
    }

    grunt.registerTask('removepage', () => {
        if(newName) {
            grunt.log.writeln('deleting webpage "'.yellow, newName);
            grunt.task.run(['clean:template']);
        }
        else {
            grunt.log.errorlns('Unable to remove webpage');
            readTask(gruntTasks.remove);
        }
    });
};
