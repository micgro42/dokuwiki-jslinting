module.exports = function(grunt) {
    'use strict';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'), // the package file to use
        scriptfiles: ['Gruntfile.js',  'script/*.js', 'script.js'],
        eslint: {
            all: ['<%= scriptfiles %>']
        },
        watch: {
            linting: {
                files: ['<%= scriptfiles %>'],
                tasks: ['eslint'],
                options: {
                    spawn: false,
                },
            }
        }
    });

    grunt.event.on('watch', function(action, filepath) {
        grunt.config('eslint.all', filepath);
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-stylelint');
    grunt.registerTask('default', ['eslint']);
};

