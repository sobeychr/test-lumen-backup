'use strict';

module.exports = (grunt) => {
    const pathGrunt = grunt.config.get('pathGrunt');
    const pathCommands = './commands/';
    const pathTasks = './tasks/';

    const gruntInit = grunt.config.get('gruntInit');

    grunt.file.recurse(pathGrunt + pathCommands, (abspath, rootdir, subdir, filename) => {
        require(pathCommands + filename)(grunt);
    });
    
    /*
    grunt.file.recurse(pathGrunt + pathTasks, (abspath, rootdir, subdir, filename) => {
        const task = filename.replace('.js', '');
        gruntInit[task] = require(pathTasks + filename)(grunt);
    });

    grunt.config.set('gruntInit', gruntInit);
    */

    gruntInit.browserify = require('./tasks/browserify.js')(grunt);
    gruntInit.copy = require('./tasks/copy.js')(grunt);
    gruntInit.exorcise = require('./tasks/exorcise.js')(grunt);
    gruntInit.sass = require('./tasks/sass.js')(grunt);
    gruntInit.watch = require('./tasks/watch.js')(grunt);

    grunt.config.set('gruntInit', gruntInit);
};
