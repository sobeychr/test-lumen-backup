'use strict';

module.exports = (grunt) => {
    require('./grunt/includes.js')(grunt);

    const readTask   = grunt.config.get('readTask');
    const gruntTasks = grunt.config.get('gruntTasks');

    grunt.registerTask('default', () => {
        grunt.log.errorlns('No task selected');
        for(let i in gruntTasks)
        {
            readTask(gruntTasks[i]);
        }
    });

    const gruntInit = grunt.config.get('gruntInit');
    grunt.log.writeln('gruntInit', gruntInit);
    grunt.config.init(gruntInit);
};

/*
'use strict';

module.exports = (grunt) => {
    const pkg = grunt.file.readJSON('package.json');
    const configs = { pkg };

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-exorcise');

    configs.browserify = {
        options: {
            browserifyOptions: {
                debug: true,
                watch: false,
            },
            transform: [
                ['babelify', {presets: ['@babel/preset-env']}]
            ],
        },
        dist: {
            files: {
                'dist/index.js': 'src/index.js',
            }
        }
    };
    configs.exorcise = {
        dist: {
            files: {
                'dist/index.js.map': 'dist/index.js',
            }
        }
    };

    grunt.initConfig(configs);

    grunt.registerTask('default', () => {
        grunt.log.writelns('>> default task');
        grunt.task.run(['browserify', 'exorcise']);
    });
};
*/