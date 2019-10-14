'use strict';

module.exports = (grunt) => {
    const addInit = grunt.config.get('addInit');
    const ucFirst = grunt.config.get('ucFirst');
    
    const newName = grunt.option('name') || '';
    addInit('newName', newName);
    addInit('newUcName', ucFirst(newName));
};
