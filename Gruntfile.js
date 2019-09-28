'use strict';

module.exports = (grunt) => {
    const configs = require('./grunt/configs.js')(grunt);
    grunt.config.init(configs);

    const tasks = [
        ['build', 'compiles assets'],
        ['dev', 'inits development; grunt build && grunt watch'],
        ['watch', 'watches assets and recompiles them'],
        '',
        ['addpage --name={name}', 'creates new templates for {name}.blade.php'],
        ['removepage --name={name}', 'removes an existing {name}.blade.php'],
    ];

    grunt.registerTask('default', () => {
        grunt.log.errorlns('No task selected');

        tasks.forEach(entry => {
            if(entry === '') {
                grunt.log.writeln('');
            }
            else {
                const [ task, desc ] = entry;

                grunt.log.writeln(
                    '>>',
                    'grunt'['yellow'],
                    task['yellow'],
                    desc,
                );
            }
        });
    });
};
