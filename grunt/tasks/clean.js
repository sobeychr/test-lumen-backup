'use strict';

module.exports = (grunt) => {
    grunt.task.loadNpmTasks('grunt-contrib-clean');

    return {
        assets: ['./public/assets/**/*'],
        sass:   ['./grunt/.sass-cache/**/*'],
        js:     ['./assets/js/compiled'],
        storage: [
            './storage/framework/views/**/*.php',
            './storage/logs/**/*.log',
        ],
    };
};
