'use strict';

module.exports = (grunt) => {
    return {
        assets: ['./public/assets/**/*', '!./public/assets/.gitkeep'],
        sass:   ['./grunt/.sass-cache/**/*'],
        storage: [
            './storage/framework/views/**/*.php'
            './storage/logs/**/*.log'
        ],
    };
};
