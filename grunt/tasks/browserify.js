'use strict';

module.exports = (grunt) => {
    grunt.task.loadNpmTasks('grunt-browserify');

    const { destJs, fileJs, srcJs } = grunt.config.get('globals');

    return {
        options: {
            browserifyOptions: {
                paths: [
                    './assets/js/',
                    './node_modules/',
                ],
                debug: true,
                watch: false,
            },
        },
        js: {
            options: {
                transform: [
                    ['babelify', {presets: ['@babel/preset-env']}]
                ],
            },
            files: [{
                expand: true,
                cwd: srcJs,
                src: fileJs,
                dest: destJs,
            }],
        },
    };
};
