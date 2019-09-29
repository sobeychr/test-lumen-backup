'use strict';

module.exports = (grunt) => {
    grunt.task.loadNpmTasks('grunt-import-js');

    return {
        options: {
            importDir: 'assets/js/',
        },
        files: {
            expand: true,
            cwd: 'assets/js/pages/',
            src: [
                '**/*.js',
                '!**/*.js.map'
            ],
            dest: 'assets/js/compiled/',
        },
    };
};
