'use strict';

module.exports = (grunt) => {
    const root = './grunt/_data/webpage/template';
    const templates = [
        [root + '.blade.php', './resources/views/page/{name}.blade.php'],
        [root + '.js', './assets/js/{name}.js'],
        [root + '.scss', './assets/scss/{name}.scss'],
    ];

    const newName = grunt.option('na') || '';
    const delName = grunt.option('delete') || '';

    grunt.registerTask('webpage', () => {
        if(newName) {
            grunt.log.writeln('creating new webpage'.yellow, newName);
            templates.forEach(entry => {
                const [src, dest] = entry;
                const path = dest.replace('{name}', newName);
                grunt.file.copy(src, path);
            });
        }
        else if(delName) {
            grunt.log.writeln('deleting webpage "'.yellow, delName);
            templates.forEach(entry => {
                const [, dest] = entry;
                const path = dest.replace('{name}', delName);
                grunt.file.delete(path);
            });
        }
        else {
            grunt.log.errorlns('Unable to create/remove webpage');
            grunt.log.writeln(
                '>>',
                'grunt webpage --de={name}'.yellow,
                'removes an existing {name}.blade.php',
            );
            grunt.log.writeln(
                '>>',
                'grunt webpage --na={name}'.yellow,
                'creates new templates for a {name}.blade.php',
            );
        }
    });
};
