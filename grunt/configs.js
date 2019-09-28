'use strict';

module.exports = (grunt) => {
    const tasks = {
        clean: 'grunt-contrib-clean',
        copy:  'grunt-contrib-copy',
        sass:  'grunt-contrib-sass',
        uglify: 'grunt-contrib-uglify',
        watch:  'grunt-contrib-watch',
    };
    const taskConfigs = {};

    Object.keys(tasks).forEach(task => {
        taskConfigs[task] = require('./tasks/' + task + '.js')(grunt);
        grunt.loadNpmTasks(tasks[task]);
    });

    require('./commands/addpage.js')(grunt);
    require('./commands/build.js')(grunt);
    require('./commands/dev.js')(grunt);
    require('./commands/removepage.js')(grunt);
    // require('./commands/webpage.js')(grunt);

    const pkg = grunt.file.readJSON('./package.json');
    return {
        ...taskConfigs,
        pkg,
    };
};
