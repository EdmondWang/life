module.exports = function(grunt){
    // establish task configuration
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      uglify: {
          options: {
              banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
          },
          build: {
              src: 'public/javascripts/main.js',
              dest: 'build/main.js'
          }
      },

      debug: {
        options: {
          open: true // do open node-inspector in Chrome automatically
        }
      },

      bower: {
        dev: {
          dest: 'public/lib',
          options: {
            expand: true,
            packageSpecific: {
              'bootstrap': {
                files: [
                  'dist/css/bootstrap.css',
                  'dist/css/bootstrap.css.map'
                ]
              }
            }
          }
        }
      },

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-bower');
    grunt.loadNpmTasks('grunt-debug-task');

    grunt.registerTask('default', ['uglify']);
};