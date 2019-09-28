'use strict';

module.exports = (grunt) => {
    const root = './grunt/_data/webpage/template';
    const templates = [
        [root + '.blade.php', './resources/views/page/{name}.blade.php'],
        [root + '.js', './assets/js/{name}.js'],
        [root + '.scss', './assets/scss/{name}.scss'],
    ];

    const newName = grunt.option('name') || '';

    grunt.registerTask('addpage', () => {
        if(newName) {
            grunt.log.writeln('adding new webpage'.yellow, newName);
            templates.forEach(entry => {
                const [src, dest] = entry;
                const path = dest.replace('{name}', newName);
                grunt.file.copy(src, path);
            });
        }
        else {
            grunt.log.errorlns('Unable to add webpage');
            grunt.log.writeln(
                '>>',
                'grunt addpage --name={name}'.yellow,
                'creates new templates for a {name}.blade.php',
            );
        }
    });
};
