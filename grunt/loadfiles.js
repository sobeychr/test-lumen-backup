'use strict';

module.exports = (grunt) => {
    const pathGrunt = './grunt/';
    const pathCommands = './commands/';
    const pathTasks = './tasks/';

    // Loads commands
    grunt.file.recurse(pathGrunt + pathCommands, (abspath, rootdir, subdir, filename) => {
        require(pathCommands + filename)(grunt);
    });
    
    // Loads tasks
    const gruntInit = grunt.config.get('gruntInit');
    grunt.file.recurse(pathGrunt + pathTasks, (abspath, rootdir, subdir, filename) => {
        const task = filename.replace('.js', '');
        gruntInit[task] = require(pathTasks + filename)(grunt);
    });
    grunt.config.set('gruntInit', gruntInit);
};
