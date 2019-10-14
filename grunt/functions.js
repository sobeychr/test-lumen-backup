'use strict';

module.exports = (grunt) => {
    const gruntTasks = grunt.config.get('gruntTasks');

    // Uppercase first letter
    const ucFirst = string => string.substring(0,1).toUpperCase() + string.substring(1);
    grunt.config.set('ucFirst', ucFirst);

    // Reads tasks and prints their commands and desriptions
    const readTask = key => {
        const task = gruntTasks[key] || false;
        if(!task || task === '') {
            grunt.log.writeln('');
        }
        else {
            const [ command, desc ] = task;
            grunt.log.writeln(
                '>>',
                'grunt'['yellow'],
                command['yellow'],
                desc,
            );
        }
    };
    grunt.config.set('readTask', readTask);
};
