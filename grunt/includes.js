'use strict';

module.exports = (grunt) => {
    require('./configs.js')(grunt);
    require('./functions.js')(grunt);
    require('./loadfiles.js')(grunt);
};
