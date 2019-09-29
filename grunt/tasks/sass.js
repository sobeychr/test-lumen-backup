'use strict';

module.exports = (grunt) => {
    grunt.task.loadNpmTasks('grunt-contrib-sass');

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
                cwd: 'assets/scss',
                src: ['**/*.scss'],
                dest: 'public/assets/css/',
                ext: '.css',
            }]
        }
    };
};
