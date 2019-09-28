'use strict';

module.exports = (grunt) => {
    const root = './grunt/_data/webpage/template';
    const templates = [
        [root + '.blade.php', './resources/views/page/{name}.blade.php'],
        [root + '.js', './assets/js/{name}.js'],
        [root + '.scss', './assets/scss/{name}.scss'],
    ];

    const newName = grunt.option('name') || '';

    grunt.registerTask('removepage', () => {
        if(newName) {
            grunt.log.writeln('deleting webpage "'.yellow, delName);
            templates.forEach(entry => {
                const [, dest] = entry;
                const path = dest.replace('{name}', delName);
                grunt.file.delete(path);
            });
        }
        else {
            grunt.log.errorlns('Unable to remove webpage');
            grunt.log.writeln(
                '>>',
                'grunt webpage --name={name}'.yellow,
                'removes an existing {name}.blade.php',
            );
        }
    });
};
