'use strict';

module.exports = (grunt) => {
    grunt.task.loadNpmTasks('grunt-contrib-uglify');

    return {
        main: {
            options: {
                comments: false,
                ie8: false,
                quote_style: 1,
                sourceMap: true,
            },
            files: [{
                expand: true,
                cwd: 'assets/js/',
                src: ['**/*.js', '!**/*.min.js', '!**/*.js.map'],
                dest: 'public/assets/js/',
            }]
        }
    };
};
