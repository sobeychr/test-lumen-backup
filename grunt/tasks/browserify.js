'use strict';

module.exports = (grunt) => {
    grunt.task.loadNpmTasks('grunt-browserify');

    return {
        options: {
            browserifyOptions: {
                debug: true,
                watch: false,
            },
        },
        js: {
            options: {
                transform: [
                    ['babelify', {presets: ['@babel/preset-env']}]
                ],
            },
            files: [{
                expand: true,
                cwd: 'assets/js/pages/',
                src: ['**/*.js', '!**/*.min.js', '!**/*.js.map'],
                dest: 'public/assets/js/',
            }],
        },
    };
};
