'use strict';

module.exports = (grunt) => {
    grunt.task.loadNpmTasks('grunt-contrib-sass');

    const { destScss, fileScss, srcScss } = grunt.config.get('globals');

    return {
        main: {
            options: {
                cacheLocation: './grunt/.sass-cache',
                precision: 3,
                sourcemap: 'file',
                style: 'compressed',
                trace: true,
                unixNewlines: true,
                update: true,
            },
            files: [{
                expand: true,
                cwd: srcScss,
                src: fileScss,
                dest: destScss,
                ext: '.css',
            }]
        }
    };
};
