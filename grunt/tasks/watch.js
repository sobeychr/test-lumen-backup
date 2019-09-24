'use strict';

module.exports = (grunt) => {
    return {
        css: {
            files: ['assets/scss/**/*.scss'],
            tasks: ['sass'],
        },
        js: {
            files: ['assets/js/**/*.js', '!assets/js/**/*.min.js', '!assets/js/**/*.js.map'],
            tasks: ['sass'],
        },
        jsmin: {
            files: ['assets/js/**/*.min.js'],
            tasks: ['copy'],
        },
    };
};
