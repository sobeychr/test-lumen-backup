'use strict';

module.exports = (grunt) => {
    grunt.task.loadNpmTasks('grunt-contrib-clean');

    return {
        assets: ['./public/assets/**/*'],
        sass:   ['./grunt/.sass-cache/**/*'],
        storage: [
            './storage/framework/views/**/*.php',
            './storage/logs/**/*.log',
        ],
        template: [
            './resources/views/page/<%= newName %>.blade.php',
            './app/Http/Controllers/page/<%= newUcName %>.php',
            './assets/js/<%= newName %>.js',
            './assets/scss/<%= newName %>.scss',
        ],
    };
};
