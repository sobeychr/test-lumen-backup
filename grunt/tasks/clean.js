'use strict';

module.exports = (grunt) => {
    grunt.task.loadNpmTasks('grunt-contrib-clean');

    const ucFirst = grunt.config.get('ucFirst');

    const cli = grunt.cli.tasks;
    const newName = grunt.option('name') || '';
    let template = [];

    if(cli.includes('removepage') && newName) {
        const newUcName = ucFirst(newName);
        template = [
            './resources/views/page/' + newName + '.blade.php',
            './app/Http/Controllers/page/' + newUcName + '.php',
            './assets/js/' + newName + '.js',
            './assets/scss/' + newName + '.scss',
        ];
    }

    return {
        assets: ['./public/assets/**/*'],
        sass:   ['./grunt/.sass-cache/**/*'],
        storage: [
            './storage/framework/views/**/*.php',
            './storage/logs/**/*.log',
        ],
        template,
    };
};
