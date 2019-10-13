'use strict';

module.exports = (grunt) => {
    grunt.task.loadNpmTasks('grunt-browserify');

    return {
        options: {
            browserifyOptions: {
                debug: true,
                watch: false,
            },
            transform: [
                ['babelify', {presets: ['@babel/preset-env']}]
            ],
        },
        js: {
            files: {
                'dist/index.js' : 'assets/**/*.js',
            },
        },
    };
};
