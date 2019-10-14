'use strict';

module.exports = (grunt) => {
    grunt.task.loadNpmTasks('grunt-contrib-watch');

    const {
        fileScss, srcScss,
        fileJsWatch, srcJs,
    } = grunt.config.get('globals');
    const cssFiles = fileScss.map(entry => srcScss + entry);
    const jsFiles = fileJsWatch.map(entry => srcJs + entry);

    return {
        css: {
            files: cssFiles,
            tasks: ['sass'],
        },
        js: {
            files: fileJsWatch,
            tasks: ['js'],
        },
    };
};
