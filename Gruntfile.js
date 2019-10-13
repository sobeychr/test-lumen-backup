'use strict';

module.exports = (grunt) => {
    require('./grunt/includes.js')(grunt);

    const readTask   = grunt.config.get('readTask');
    const gruntTasks = grunt.config.get('gruntTasks');

    grunt.registerTask('default', () => {
        grunt.log.errorlns('No task selected');
        for(let i in gruntTasks)
        {
            readTask(gruntTasks[i]);
        }
    });

    const gruntInit = grunt.config.get('gruntInit');
    grunt.config.init(gruntInit);
};
