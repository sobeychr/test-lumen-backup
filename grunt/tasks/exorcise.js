'use strict';

module.exports = (grunt) => {
    grunt.task.loadNpmTasks('grunt-exorcise');

    const { destJs, fileJs } = grunt.config.get('globals');

    return {
        js: {
            files: [{
                expand: true,
                cwd: destJs,
                src: fileJs,
                dest: destJs,
                ext: '.js.map',
            }],
        }
    };
};
