'use strict';

module.exports = (grunt) => {
    const constants = {
        'pathRoot':  './',
        'pathGrunt': './grunt/',

        'pathJs':    './assets/js/',
        'pathImage': './assets/images/',
        'pathScss':  './assets/scss/',

        'pathPublicCss':   './public/assets/css',
        'pathPublicImage': './public/assets/images',
        'pathPublicJs':    './public/assets/js',
    };
    Object.keys(constants).forEach(key => {
        const value = constants[key];
        grunt.config.set(key, value);
    });

    /*
    const gruntTasks = {
        build: ['build', 'compiles assets'],
        dev:   ['dev', 'inits development; builds then watches'],
        t0: '',
        add:    ['addpage --name={name}', 'creates new templates for {name}.blade.php'],
        remove: ['removepage --name={name}', 'removes an existing {name}.blade.php'],
    };
    grunt.config.set('gruntTasks', gruntTasks);

    const readTask = task => {
        if(task === '') {
            grunt.log.writeln('');
        }
        else {
            const [ command, desc ] = task;

            grunt.log.writeln(
                '>>',
                'grunt'['yellow'],
                command['yellow'],
                desc,
            );
        }
    };
    grunt.config.set('readTask', readTask);
    */

    const gruntInit = grunt.file.readJSON('./package.json');
    grunt.config.set('gruntInit', gruntInit);
};
