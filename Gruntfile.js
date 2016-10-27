module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: 
                [
                    'bower_components/angular/angular.js',
                    'app.js',
                    'components/card.js',
                    'components/card-list.js'
                ],
                dest: 'app-bundle.js',
            },
        },
        watch: {
            scripts: {
                files: ['<%= concat.dist.src %>'],
                tasks: ['concat'],
                options: {
                    spawn: false,
                },
            },
        },
    });
    grunt.registerTask('build', ['concat']);

};