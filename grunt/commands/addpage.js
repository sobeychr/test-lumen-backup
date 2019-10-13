'use strict';

module.exports = (grunt) => {
    const ucFirst = grunt.config.get('ucFirst');

    const renameController = (src, dest, newName) => {
        const content = grunt.file.read(src);
        let newContent = content.replace('Template', ucFirst(newName));
        newContent = newContent.replace('template', newName);
        grunt.file.write(dest, newContent);
    };

    const root = './grunt/_data/webpage/template';
    const templates = [
        [root + '.blade.php', './resources/views/page/{name}.blade.php'],
        [root + '.controller.php', './app/Http/Controllers/page/{Name}.php', renameController],
        [root + '.js', './assets/js/pages/{name}.js'],
        [root + '.scss', './assets/scss/{name}.scss'],
    ];

    const newName = grunt.option('name') || '';

    grunt.registerTask('addpage', () => {
        if(newName) {
            grunt.log.writeln('adding new webpage'.yellow, newName);
            templates.forEach(entry => {
                const [src, dest, renameFunc] = entry;
                const path = dest
                    .replace('{name}', newName)
                    .replace('{Name}', ucFirst(newName));
                
                if(typeof renameFunc === 'function') {
                    renameFunc(src, path, newName);
                }
                else {
                    grunt.file.copy(src, path);
                }
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
