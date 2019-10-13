'use strict';

module.exports = (grunt) => {
    const ucFirst = grunt.config.get('ucFirst');
    
    const root = './grunt/_data/webpage/template';
    const templates = [
        [root + '.blade.php', './resources/views/page/{name}.blade.php'],
        [root + '.controller.php', './app/Http/Controllers/page/{Name}.php'],
        [root + '.js', './assets/js/pages/{name}.js'],
        [root + '.scss', './assets/scss/{name}.scss'],
    ];

    const newName = grunt.option('name') || '';

    grunt.registerTask('removepage', () => {
        if(newName) {
            grunt.log.writeln('deleting webpage "'.yellow, newName);
            templates.forEach(entry => {
                const [, dest] = entry;
                const path = dest
                    .replace('{name}', newName)
                    .replace('{Name}', ucFirst(newName));
                grunt.file.delete(path);
            });
        }
        else {
            grunt.log.errorlns('Unable to remove webpage');
            grunt.log.writeln(
                '>>',
                'grunt removepage --name={name}'.yellow,
                'removes an existing {name}.blade.php',
            );
        }
    });
};
