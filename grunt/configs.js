'use strict';

module.exports = (grunt) => {
    // Global constants
    grunt.config.set('globals', {
        fileJs:      ['**/*.js', '!component/**', '!pages/**', '!**/*.min.js', '!**/*.map', '!**/*.backup'],
        fileJsWatch: ['**/*.js', '!**/*.map', '!**/*.backup'],
        fileScss:    ['**/*.scss', '!**/*.backup'],

        destJs:   './public/assets/js/',
        destImg:  './public/assets/images/',
        destScss: './public/assets/css/',

        srcJs:   './assets/js/',
        srcImg:  './assets/images/',
        srcScss: './assets/scss/',
    });

    // Available tasks with their command and description
    const gruntTasks = {
        build: ['build', 'compiles assets'],
        dev:   ['dev', 'inits development; builds then watches'],
        t0: '',
        add:    ['addpage --name={name}', 'creates new templates for {name}.blade.php'],
        remove: ['removepage --name={name}', 'removes an existing {name}.blade.php'],
    };
    grunt.config.set('gruntTasks', gruntTasks);

    // Grunt Init configs
    grunt.config.set('gruntInit', {});
};
