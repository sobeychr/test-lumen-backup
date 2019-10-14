'use strict';

module.exports = (grunt) => {
    // Uppercase first letter
    const ucFirst = string => string.substring(0,1).toUpperCase() + string.substring(1);
    grunt.config.set('ucFirst', ucFirst);

    // Reads tasks and prints their commands and desriptions
    const readTask = task => {
        if(task === '') {
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
