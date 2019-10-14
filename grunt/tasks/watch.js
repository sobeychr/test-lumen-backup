'use strict';

module.exports = (grunt) => {
    grunt.task.loadNpmTasks('grunt-contrib-watch');

    const compilePaths = (root, paths) => (
        paths.map(path => path.charAt(0) === '!'
            ? '!' + root + path.substring(1)
            : root + path
        )
    );

    const {
        fileScss, srcScss,
        fileJsWatch, srcJs,
    } = grunt.config.get('globals');

    const cssFiles = compilePaths(srcScss, fileScss);
    const jsFiles = compilePaths(srcJs, fileJsWatch);

    return {
        css: {
            files: ['./assets/scss/**/*.scss'],
            tasks: ['sass'],
        },
        js: {
            files: ['./assets/js/**/*.js'],
            tasks: ['js'],
        },
    };
};
