'use strict';

module.exports = (grunt) => {
    require('./grunt/includes.js')(grunt);

    const readTask   = grunt.config.get('readTask');
    const gruntTasks = grunt.config.get('gruntTasks');

    grunt.registerTask('default', () => {
        grunt.log.errorlns('No task selected');
        Object.keys(gruntTasks).forEach(key => {
            readTask(key);
        });
    });
    
    grunt.config.init({
        ...grunt.config.get('gruntInit'),
        pkg: grunt.file.readJSON('./package.json'),
    });
};
