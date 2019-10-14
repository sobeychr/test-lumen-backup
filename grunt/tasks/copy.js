'use strict';

module.exports = (grunt) => {
    grunt.task.loadNpmTasks('grunt-contrib-copy');

    const {
        destJs, fileJsMin, srcJs,
        destImg, srcImg,
    } = grunt.config.get('globals');
    const imgExt = ['gif','jpg','png'];
    const rootTemplate = './grunt/_data/webpage/template';

    return {
        jsmin: {
            files: [{
                expand: true,
                cwd: srcJs,
                src: fileJsMin,
                dest: destJs,
            }],
        },
        image: {
            files: [{
                expand: true,
                cwd: srcImg,
                src: ['**/*.{' + imgExt.join(',') + '}'],
                dest: destImg,
            }],
        },
        template: {
            files: {
                './resources/views/page/<%= newName %>.blade.php' : rootTemplate + '.blade.php',
                './app/Http/Controllers/page/<%= newUcName %>.php' : rootTemplate + '.controller.php',
                './assets/js/<%= newName %>.js' : rootTemplate + '.js',
                './assets/scss/<%= newName %>.scss' : rootTemplate + '.scss',
            },
        },
    };
};
