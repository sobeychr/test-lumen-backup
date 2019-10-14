'use strict';

module.exports = (grunt) => {
    grunt.task.loadNpmTasks('grunt-contrib-copy');

    const ucFirst = grunt.config.get('ucFirst');
    const {
        destJs, fileJsMin, srcJs,
        destImg, srcImg,
    } = grunt.config.get('globals');
    const imgExt = ['gif','jpg','png'];
    const rootTemplate = './grunt/_data/webpage/template';

    const cli = grunt.cli.tasks;
    const newName = grunt.option('name') || '';
    const template = {};

    if(cli.includes('addpage') && newName) {
        const newUcName = ucFirst(newName);
        template.files = {
            ['./resources/views/page/' + newName + '.blade.php']: rootTemplate + '.blade.php',
            ['./app/Http/Controllers/page/' + newUcName + '.php']:  rootTemplate + '.controller.php',
            ['./assets/js/' + newName + '.js']:     rootTemplate + '.js',
            ['./assets/scss/' + newName + '.scss']: rootTemplate + '.scss',
        };
    }

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
        template,
    };
};
