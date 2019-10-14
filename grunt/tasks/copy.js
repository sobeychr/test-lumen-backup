'use strict';

module.exports = (grunt) => {
    grunt.task.loadNpmTasks('grunt-contrib-copy');

    const {
        destJs, fileJsMin, srcJs,
        destImg, srcImg,
    } = grunt.config.get('globals');
    const imgExt = ['gif','jpg','png'];

    return {
        jsmin: {
            expand: true,
            cwd: srcJs,
            src: fileJsMin,
            dest: destJs,
        },
        image: {
            expand: true,
            cwd: srcImg,
            src: ['**/*.{' + imgExt.join(',') + '}'],
            dest: destImg,
        },
    };
};
