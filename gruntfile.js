module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON(`package.json`),
        copy: {
            html: {
                expand: true,
                cwd: 'client/views/',
                src: ['*.html',
                    '**/*.html',
                    '**/**/*.html'
                ],
                dest: 'server/public/'
            },
            css: {
                expand: true,
                cwd: 'client/style/',
                src: ['*.css',
                    '**/*.css'
                ],
                dest: 'server/public/'
            }
        },
        watch: {
            options: {
                livereload: true
            },
            files: ['client/**/*.*',
                'client/**/**/*.*',
                'client/**/**/**/*.*'
            ],
            tasks: ['copy']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['copy', 'watch']);

};