'use strict';

module.exports = (grunt) => {
    grunt.task.loadNpmTasks('grunt-contrib-watch');

    return {
        css: {
            files: ['assets/scss/**/*.scss'],
            tasks: ['sass'],
        },
        js: {
            files: ['assets/js/**/*.js', '!assets/js/**/*.min.js', '!assets/js/**/*.js.map'],
            tasks: ['uglify'],
        },
        jsmin: {
            files: ['assets/js/**/*.min.js'],
            tasks: ['copy'],
        },
    };
};
