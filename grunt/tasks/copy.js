'use strict';

module.exports = (grunt) => {
    grunt.task.loadNpmTasks('grunt-contrib-copy');

    const imgExt = ['gif','jpg','png'];

    return {
        jsmin: {
            expand: true,
            cwd: 'assets/js/',
            src: ['**/*.min.js', '!**/*.js.map'],
            dest: 'public/assets/js/',
        },
        image: {
            expand: true,
            cwd: 'assets/images/',
            src: ['**/*.{' + imgExt.join(',') + '}'],
            dest: 'public/assets/images/',
        },
    };
};
